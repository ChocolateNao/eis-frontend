import styled from 'styled-components';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const PageButton = styled.button<{ isactive?: string }>`
  background-color: ${(props) =>
    props.isactive === 'true' ? '#132be8' : '#ffffff'};
  color: ${(props) => (props.isactive === 'true' ? '#ffffff' : '#1f2939')};
  border: 1px solid #ced5de;
  min-width: 18px;
  min-height: 28px;
  font-size: 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
  cursor: pointer;

  &:hover {
    background-color: #4558ed;
    color: white;
  }
`;

const Ellipsis = styled(PageButton)`
  cursor: default;
  &:hover {
    background-color: white;
    color: #007bff;
  }
`;

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPages = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push(-1);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push(-2);
        }
        pages.push(totalPages);
      }

      while (pages.length < 6) {
        if (pages[0] > 1) {
          pages.unshift(pages[0] - 1);
        } else if (pages[pages.length - 1] < totalPages) {
          pages.push(pages[pages.length - 1] + 1);
        } else {
          break;
        }
      }
    }
    return pages;
  };

  const pages = getPages();

  return (
    <PaginationContainer>
      {pages.map((page, index) =>
        page > 0 ? (
          <PageButton
            key={index}
            isactive={String(page === currentPage)}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        ) : (
          <Ellipsis key={index}>...</Ellipsis>
        )
      )}
    </PaginationContainer>
  );
}

export { Pagination };
