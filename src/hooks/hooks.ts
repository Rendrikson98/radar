import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UseDispatch, RootState } from '../store/store';

export const useAppDispatch = () => useDispatch<UseDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
