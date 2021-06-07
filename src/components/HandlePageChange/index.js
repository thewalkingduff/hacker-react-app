

import setCurrentPage from '../../App'

export const HandlePageChange = (e) => {
    setCurrentPage(Number(e.target.textContent));
};

export default HandlePageChange