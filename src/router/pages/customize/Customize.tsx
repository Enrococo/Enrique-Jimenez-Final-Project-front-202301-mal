import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CustomizeForm } from '../../../features/customize-form/CustomizeForm';
import { Board } from '../../../features/customize/board-grid/Board';
import { GridModular } from '../../../features/customize/grid-modular/GridModular';
import { ModularItem } from '../../../features/customize/modular-item/ModularItem';
import { CustomizeStyled } from './CustomizeStyled';

export const CustomizePage = () => {
  return (
    <CustomizeStyled>
      <div id="columnTwo" className="columnTwo" aria-label="columnTwo">
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </div>
      <div className="columnOne">
        <h2 className="custom__title">Crea tu propia Estora Modular</h2>
        <h3 className="custom__subtitle">1. Elige un módulo</h3>
        <GridModular />
        <h3 className="custom__subtitle">
          2. Arrastra o haz click en la rejilla para añadirlo
        </h3>
        <DndProvider backend={HTML5Backend}>
          <ModularItem />
        </DndProvider>
        <CustomizeForm />
      </div>
    </CustomizeStyled>
  );
};
