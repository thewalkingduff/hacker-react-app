import React from 'react'

export const Range = (start, end) => {
    return Array(end - start + 1)
        .fill(0)
        .map((item, i) => start + i);
}

export default Range;

