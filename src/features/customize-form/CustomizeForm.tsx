import html2canvas from 'html2canvas';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectModularItemsUrl } from '../customize/modular-item/modularItemSlice';
import { postNewModular, selectCustomize } from './CustomizeFormSlice';
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
  let screenshot;
  let canvas: HTMLCanvasElement;
  function dataURItoBlob(dataURI: string) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else byteString = unescape(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  }

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

          screenshot = canvas.toDataURL();
          const screenshotFile = await dataURItoBlob(screenshot);
          formData.append('thumb', screenshotFile);
          dispatch(postNewModular(formData));
        }}
      >
        <div className="customize-form__name__container" aria-label="customize">
          <h3 className="customize-form__title">
            3. Da un nombre a tu creación:
          </h3>
          <input className="customize-form__name" type="text" name="name" />
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
