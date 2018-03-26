// vim:ts=2:sw=2:et

export default function rootReducer(state = {movies: []}, action) {
  switch(action.type) {
    case 'MOVIES_RECEIVED':
      console.log(action.movies);
      return { ...state, movies: action.movies };
    case 'LOAD_MOIVES_FAILED':
      return state;
    default:
      return state;
  }
}

