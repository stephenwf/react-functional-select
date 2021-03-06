import {
  OPTION_CLS,
  OPTION_FOCUSED_CLS,
  OPTION_DISABLED_CLS,
  OPTION_SELECTED_CLS,
  CARET_ICON_CLS,
  CLEAR_ICON_CLS,
  AUTOSIZE_INPUT_CLS,
  MENU_CONTAINER_CLS,
  SELECT_CONTAINER_CLS,
  CONTROL_CONTAINER_CLS
} from '../../../src/constants/dom';

export const CLASS_NAME_HTML =
  `<div class="${SELECT_CONTAINER_CLS}">
  <div class="${CONTROL_CONTAINER_CLS}">
    <div>
      <div>Select option..</div>
      <div>
        <input
          value=""
          type="text"
          class="${AUTOSIZE_INPUT_CLS}"
        />
      </div>
    </div>
    <div>
      <div>
        <svg
          aria-hidden="true"
          viewBox="0 0 14 16"
          class="${CLEAR_ICON_CLS}"
        >
          <path
            fillRule="evenodd"
            d="M7.71 8.23l3.75 3.75-1.48 1.48-3
              .75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4
              .48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
          />
        </svg>
      </div>
      <div />
      <div>
        <div
          aria-hidden="true"
          class="${CARET_ICON_CLS}"
        />
      </div>
    </div>
  </div>
  <div class="${MENU_CONTAINER_CLS}">
    <div>
      <div>
        <div class="${OPTION_CLS}">
          Option 1
        </div>
        <div class="${OPTION_CLS} ${OPTION_FOCUSED_CLS}">
          Option 2
        </div>
        <div class="${OPTION_CLS} ${OPTION_SELECTED_CLS}">
          Option 3
        </div>
        <div class="${OPTION_CLS} ${OPTION_DISABLED_CLS}">
          Option 4
        </div>
      </div>
    </div>
  </div>
</div>`;