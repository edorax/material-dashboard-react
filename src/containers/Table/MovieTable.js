// vim:ts=2:sw=2:et

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMovies } from '../../actions';
import Table from '../../components/Table/Table';

class MovieTable extends Table {
  componentDidMount() {
    this.props.loadMovies();
  }
}

const mapStateToProps = (state) => ({
  tableHeaderColor: "primary",
  tableHead: ["Title", "Original Title", "Year", "Rating"],
  tableData: state.movies.map(movie => [movie.title, movie.original_title, movie.year, movie.rating.average])
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadMovies }, dispatch);
}

export default connect(
  mapStateToProps,
  // dispatch => bindActionCreators({ loadMovies }, dispatch)
  mapDispatchToProps
)(MovieTable);
