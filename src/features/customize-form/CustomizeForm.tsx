import html2canvas from 'html2canvas';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectModularItemsUrl } from '../customize/modular-item/modularItemSlice';
import { postNewModular, selectCustomize } from './customize-form-slice';
import { CustomizeFormStyled } from './CustomizeFormStyled';

export const CustomizeForm = () => {
  const dispatch = useAppDispatch();
  const selectState = useAppSelector(selectModularItemsUrl);
  const { formMsg, formState } = useAppSelector(selectCustomize);

  const showUserFeedback = () => {
    switch (formState) {
      case 'error':
        return (
          <span className="error info" aria-label="error">
            {formMsg}
          </span>
        );
      case 'success':
        return (
          <span className="success_text info" aria-label="success_text">
            Tu diseño se ha creado correctamente
          </span>
        );

      case 'idle':
        return (
          <span className="loading info" aria-label="loading">
            {' '}
            Cargando...
          </span>
        );
    }
  };

  let canvas: HTMLCanvasElement;

  return (
    <>
      <CustomizeFormStyled
        aria-label="form"
        className="login__form"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);

          canvas = await html2canvas(
            document.querySelector('#board') as HTMLElement
          );

          const screenshotFile = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob((blob) => resolve(blob), 'image/png')
          );

          formData.append('thumb', screenshotFile as Blob);
          dispatch(postNewModular(formData));
        }}
      >
        <div className="customize-form__name__container" aria-label="customize">
          <h3 className="customize-form__title">
            3. Da un nombre a tu creación:
          </h3>
          <input
            className="customize-form__name"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="customize-form__price__button-containter">
          <h3 className="customize-form__price">Precio:</h3>
          <input
            type="text"
            name="price"
            className="customize-form__price"
            value={`${selectState.length * 30} €`}
            readOnly
          />

          <div className="create__button-container">
            <button
              type="submit"
              value="Create"
              className="create__button"
              disabled={formState === 'idle' ? true : false}
            >
              Crear
            </button>
          </div>
        </div>
        <div>{showUserFeedback()}</div>
      </CustomizeFormStyled>
    </>
  );
};
