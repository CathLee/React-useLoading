import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoadingContext } from '../src/hook/useLoading';
import Test from '../src/component/Test';

describe('TestComponent with provider', () => {
    it('calls push on button click', () => {
      const pushMock = jest.fn();
      const contextValue = {
        push: pushMock, // 提供 mock 的 push 方法
        loading: false,
        finish: jest.fn(),
        execute: jest.fn(),
        promise: jest.fn(),
        isLoading: jest.fn(),
      };
  
      render(
        <LoadingContext.Provider value={contextValue}>
          <Test />
        </LoadingContext.Provider>
      );
  
      // 模拟点击操作
      fireEvent.click(screen.getByRole('button', { name: /start load/i }));
      expect(pushMock).toHaveBeenCalledWith('unique_key');
    });
  });