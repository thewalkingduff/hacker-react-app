import React from 'react'
import { Range } from '../../components/Range'
import { Button } from 'react-bootstrap';

const Pagination = ({ items, pageSize, onPageChange }) => {
    if (items.length <= 1) return null;

    let num = Math.ceil(items.length / pageSize);
    let pages = Range(1, num + 2);
    const list = pages.map(page => {
        return (
            <Button key={page} onClick={onPageChange} className="page-item">
                {page}
            </Button>
        );
    });
    return (
        <nav>
            <ul className="pagination">{list}</ul>
        </nav>
    );
};

export default Pagination