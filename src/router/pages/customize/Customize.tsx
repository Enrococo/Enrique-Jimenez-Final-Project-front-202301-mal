import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Board } from '../../../features/customize/board-grid/Board';
import { GridModular } from '../../../features/customize/grid-modular/GridModular';
import { ModularItem } from '../../../features/customize/modular-item/ModularItem';
import { CustomizeStyled } from './CustomizeStyled';

export const CustomizePage = () => {
  return (
    <CustomizeStyled>
      <div className="columnOne">
        <h2 className="custom__title">Crea tu propia Estora Modular</h2>
        <GridModular />
        <DndProvider backend={HTML5Backend}>
          <ModularItem />
        </DndProvider>
      </div>
      <div className="columnTwo">
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </div>
    </CustomizeStyled>
  );
};
