import * as actionTypes from "../store/actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: new Date(),
        name: action.personData.name,
        age: action.personData.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };

    case actionTypes.REMOVE_PERSON:
      //   const newArr = [...state];
      //   newArr.splice(action.personId, 1);
      return {
        ...state,
        persons: state.persons.filter(p => {
          //   console.log(p);
          return p.id !== action.personId;
        })
      };

    default:
      return state;
  }
};

export default reducer;
