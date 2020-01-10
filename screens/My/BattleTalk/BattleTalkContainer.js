import React from 'react';
import {Platform} from 'react-native';
import BattleTalkPresenter from './BattleTalkPresenter';
import {tv, movie} from '../../../api/Api';

export default class extends React.Component {
  state = {
    loading: true,
    listChanged: null,
    error: null,
  };

  // 시작시 불러옴
  async componentDidMount() {
    let listChanged, error;
    try {
      ({
        data: {results: listChanged},
      } = await movie.getSearchMovie('Battle'));
    } catch (error) {
      console.log(error);
      error = "Cnat't get TV";
    } finally {
      this.setState({
        loading: false,
        listChanged,
        error,
      });
    }
  }

  render() {
    const {loading, listChanged} = this.state;
    return <BattleTalkPresenter loading={loading} listChanged={listChanged} />;
  }
}