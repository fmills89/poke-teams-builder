import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Modal = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div class="grid grid-cols-1">
        <p class="text-center text-xs mt-2 pt-2">Don't have an account? </p>
        <button
          // type="button"
          onClick={() => setShowModal(true)}
          class="scale-50 mt-1 p-2 text-black bg-white"
        >
          SignUp
        </button>
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center mb-8 px-10 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl font=semibold mt-3 p-2">Welcome!</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-8 w-8 text-xl py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    className="bg-red-400 bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 w-full"
                    onSubmit={handleFormSubmit}
                  >
                    <label className="block text-black text-sm font-bold mb-1 p-2">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="border-red-300 w-full h-5 px-3 py-5 mt-2 rounded-md"
                      value={formState.username}
                      onChange={handleChange}
                    />
                    <label className="block text-black text-sm font-bold mb-1 p-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border-red-300 w-full h-5 px-3 py-5 my-2 rounded-md form-input"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <div class="flex justify-around my-4 px-4">
                      <button type="submit" class="bg-red-600">
                        SignUp
                      </button>
                    </div>
                    {error && <div>Sign up failed</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
