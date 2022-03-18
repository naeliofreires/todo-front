import { memo } from 'react';
import * as S from './styles';

import { Props } from './types';

export const Checked = memo(({ checked }: Props) => {
  return (
    <S.CompletedView checked={checked}>
      <svg
        enableBackground="new 0 0 128 128"
        height="128px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 128 128"
        width="128px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <g>
            <path d="M85.263,46.49L54.485,77.267L42.804,65.584c-0.781-0.782-2.047-0.782-2.828-0.002c-0.781,0.782-0.781,2.048,0,2.829    l14.51,14.513l33.605-33.607c0.781-0.779,0.781-2.046,0-2.827C87.31,45.708,86.044,45.708,85.263,46.49z M64.032,13.871    c-27.642,0-50.129,22.488-50.129,50.126c0.002,27.642,22.49,50.131,50.131,50.131h0.004c27.638,0,50.123-22.489,50.123-50.131    C114.161,36.358,91.674,13.871,64.032,13.871z M64.038,110.128h-0.004c-25.435,0-46.129-20.694-46.131-46.131    c0-25.434,20.693-46.126,46.129-46.126s46.129,20.693,46.129,46.126C110.161,89.434,89.471,110.128,64.038,110.128z" />
          </g>
        </g>
      </svg>
    </S.CompletedView>
  );
});
