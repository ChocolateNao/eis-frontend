import styled from 'styled-components';
import Energy from '../../assets/icons/energy.svg';
import Flame from '../../assets/icons/flame.svg';
import Trash from '../../assets/icons/trash.svg';
import WaterCold from '../../assets/icons/water_cold.svg';
import WaterHot from '../../assets/icons/water_hot.svg';

const Span = styled.span<Pick<IconProps, 'size' | 'color'>>`
  display: inline-block;
  width: ${({ size }) => size ?? '1rem'};
  height: ${({ size }) => size ?? '1rem'};
  color: ${({ color }) => color ?? 'currentColor'};

  & svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

interface IconProps {
  variant: 'flame' | 'water_hot' | 'water_cold' | 'energy' | 'trash';
  size?: string;
  color?: string;
}

function Icon({ variant, size, color }: IconProps) {
  const renderIcon = () => {
    switch (variant) {
      case 'energy':
        return <Energy />;
      case 'flame':
        return <Flame />;
      case 'water_hot':
        return <WaterHot />;
      case 'water_cold':
        return <WaterCold />;
      case 'trash':
        return <Trash />;
      default:
        return null;
    }
  };
  return (
    <Span size={size} color={color}>
      {renderIcon()}
    </Span>
  );
}

export { Icon };
