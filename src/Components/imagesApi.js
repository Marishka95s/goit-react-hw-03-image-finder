import axios from 'axios';

const API_KEY = '21815283-4d687d50500392275cab155f7';

const fetchImages = (searchQuery = '', currentPage = 1, pageSize = 12) => {
    return axios
        .get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`)
        .then(response => response.data.hits);
};

export default { fetchImages };