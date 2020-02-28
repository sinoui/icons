/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from 'styled-components';

const IconListStyle = createGlobalStyle`
  .helper-text {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }

  hr {
    background-color: rgba(0, 0, 0, 0.12);
    height: 1px;
    width: 100%;
    border: none;
  }

  .category h3 {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  .category {
    margin-top: 40px;
  }

  .icon-display {
    width: 120px;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
  
  .icon-display > p {
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    width: 96px;
    text-align: center;
  }
  
  .icon-display__content {
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .icon-display__content:hover {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  
  .icon-display__content > i {
    font-size: 48px;
    color: rgba(0, 0, 0, 0.87);
  }

  .page-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;

    > .sinoui-input-wrapper {
      width: 100%;
      margin-bottom: 16px;
    }
  }
`;

export default IconListStyle;
