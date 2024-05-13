import { useContext } from "react";
import { LoadingContext, PushFunc } from "../hook/useLoading";

const LoadingProvider = ({ children }: any) => {
  const push: PushFunc = (key?: string): string => {
    if (!key) {
      key = 'ddddd'; // 提供一个默认值
    }
    console.log('Push actsion with key:', key);
    // 函数体
    return key;
  };
  const contextValue = {
    push, // 提供 mock 的 push 方法
    loading: false,
    finish: jest.fn(),
    execute: jest.fn(),
    promise: jest.fn(),
    isLoading: jest.fn(),
  };
  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};
