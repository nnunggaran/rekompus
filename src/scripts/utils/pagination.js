/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
function renderPagination(items, wrapper, currentPage, rowPerPage, pageNumber, createTemplate) {
  // const finalItem = items.sort((a, b) => {
  //   if (a.name > b.name) return 1;
  //   if (b.name > a.name) return -1;
  //   return 0;
  // });

  for (let i = 0; i < items.length; i += 1) {
    if (i >= (currentPage * rowPerPage) - rowPerPage && i < currentPage * rowPerPage) {
      const item = items[i];
      wrapper.innerHTML += createTemplate(item);
    }
  }
  pageNumber.innerText = currentPage;
  scrollTo({ top: 0 });
}

export default renderPagination;
