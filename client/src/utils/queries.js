import { gql } from "@apollo/client";

export const QUERY_ME = gql`
{
	me {
	  _id
	  username
	  	teams {
			_id
			pokemon {
		  		_id
		  		name
		  		type
			}
	  	}
	}
}
`;
