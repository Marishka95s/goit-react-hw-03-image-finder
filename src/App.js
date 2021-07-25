import React, { Component } from 'react';
// import axios from 'axios';
import imagesApi from './Components/imagesApi';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal'

import './App.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    error: null,
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [], error: null, })
  }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage }

    this.setState({ isLoading: true });

    imagesApi
    .fetchImages(options)
    .then(images => {
      this.setState( prevState => ({
        images: [...prevState.images, ...images] })
    )}).catch(error => this.setState({ error }))
    .finally(() => this.setState({ isLoading: false}));
  };

  render() {
    const { images, isLoading, showModal, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
        {error && <h1>Ой ошибка, все пропало!!!</h1>}

        <Searchbar onChangeQuery={this.onChangeQuery} onFetchImages={this.fetchImages}/>

        { isLoading && <h2>Loading...</h2>}

        { shouldRenderLoadMoreButton && <> 
          <ImageGallery images={images} onToggleModal={this.toggleModal}/> 
          <Button onFetchImages={this.fetchImages}/>
        </> }
      </>      
    )    
  }   
};

export default App;
