

import setCurrentPage from '../../App'

const HandlePageChange = (e) => {
    setCurrentPage(Number(e.target.textContent));
};

export default HandlePageChange