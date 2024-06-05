import styled from 'styled-components';
import { tableColWidth } from '../../models/tableColWidth.enum';
import { Meter } from '../../models/meter.interface';
import { useStore } from '../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import { perPage } from '../../models/meterType.enum';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { FC } from 'react';

export const Tr = styled.tr`
  background: #ffffff;
  button {
    display: none;
  }

  tr:hover {
    background: #f7f8f9;
  }
`;

export const Td = styled.td<{ width: string }>`
  width: ${({ width }) => width}px;
  height: 40px;
  text-align: left;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  border-top: 1px solid #e0e5eb;
  border-bottom: 1px solid #e0e5eb;
`;

export const TContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

interface TableItemProps {
  item: Meter;
  index: number;
}

const TableItem: FC<TableItemProps> = observer(
  ({ item, index }: TableItemProps) => {
    const date = new Date(item.installation_date).toLocaleDateString('ru-RU');

    const { deleteMeter, getCurrent } = useStore();

    return (
      <>
        <Tr>
          <Td width={tableColWidth.id}>{index + 1}</Td>
          <Td width={tableColWidth.type}>
            <Icon
              variant={
                item._type[0] as 'HotWaterAreaMeter' | 'ColdWaterAreaMeter'
              }
            />{' '}
            {item._type[0] === 'HotWaterAreaMeter' ? 'ГВС' : 'ХВС'}
          </Td>
          <Td width={tableColWidth.date}>{date}</Td>
          <Td width={tableColWidth.auto}>{item.is_automatic ? 'да' : 'нет'}</Td>
          <Td width={tableColWidth.current}>{item.initial_values[0]}</Td>
          <Td width={tableColWidth.address}>
            {item.address ? item.address.house.address : '-'},{' '}
            {item.address ? item.address.str_number_full : '-'}
          </Td>
          <Td width={tableColWidth.other}>
            <TContainer>
              {item.description ?? '-'}
              <Button
                variant="destructive"
                onClick={() => deleteMeter(item.id, perPage, getCurrent.offset)}
              >
                <Icon variant="trash" color="#C53030" />
              </Button>
            </TContainer>
          </Td>
        </Tr>
      </>
    );
  }
);

export { TableItem };
