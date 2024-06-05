import styled from 'styled-components';
import { tableColWidth } from '../../models/tableColWidth.enum';

export const Th = styled.th<{ width: string }>`
  text-align: left;
  padding: 8px 12px;
  background: #f0f3f7;
  color: #697180;
  font-size: 13px;
  font-weight: 500;
  width: ${({ width }) => width}px;
`;

function TableHeader() {
  return (
    <thead>
      <tr>
        <Th width={tableColWidth.id}>№</Th>
        <Th width={tableColWidth.type}>Тип</Th>
        <Th width={tableColWidth.date}>Дата установки</Th>
        <Th width={tableColWidth.auto}>Автоматический</Th>
        <Th width={tableColWidth.current}>Текущее показание</Th>
        <Th width={tableColWidth.address}>Адрес</Th>
        <Th width={tableColWidth.other}>Примечание</Th>
      </tr>
    </thead>
  );
}

export { TableHeader };
