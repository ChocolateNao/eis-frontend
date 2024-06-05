import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import styled from 'styled-components';
import { useStore } from '../../hooks/useStore';
import { Pagination } from '../Pagination';
import { TableHeader } from '../TableHeader';
import { TableItem } from '../TableItem';
import { perPage } from '../../models/meterType.enum';

export const ScrollTable = styled.div`
  margin: 20px;
  border: 1px solid #e0e5eb;
  border-radius: 12px;
  overflow: hidden;
  scrollbar-color: #5e6674 #f0f3f7;
  height: 90vh;
  background-color: #ffffff;
`;

export const MainTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
  table-layout: fixed;
  background: #ffffff;
  tr button {
    display: none;
  }

  tr:hover {
    background: #f7f8f9;
    button {
      display: block;
    }
  }
`;

export const TableBody = styled.div`
  overflow-x: auto;
  margin: 0;
  border: none;
  height: 89%;
`;

export const TableFooter = styled.div`
  height: 48px;
  display: flex;
  justify-content: end;
  padding: 8px 16px;
  border-top: 1px solid #eef0f4;
`;

const Table: FC = observer(() => {
  const { getMeters, isLoading, getPagination, setPage, getCurrent } =
    useStore();

  return (
    <>
      <ScrollTable>
        <MainTable>
          <TableHeader />
        </MainTable>

        <TableBody>
          <MainTable>
            <tbody>
              {isLoading ? (
                getMeters.map((item, index) => {
                  return (
                    <TableItem
                      key={item.id}
                      item={item}
                      index={index + getCurrent.offset}
                    />
                  );
                })
              ) : (
                <tr>Loading...</tr>
              )}
            </tbody>
          </MainTable>
        </TableBody>
        <TableFooter>
          <Pagination
            currentPage={getCurrent.page}
            totalPages={getPagination}
            onPageChange={(page) => setPage(perPage, perPage * page)}
          />
        </TableFooter>
      </ScrollTable>
    </>
  );
});

export { Table };
