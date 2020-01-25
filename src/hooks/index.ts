import { createTypedHooks } from 'easy-peasy';
import Store from '../interfaces/Store';

const typedHooks = createTypedHooks<Store>();

export const { useStoreActions, useStoreState, useStoreDispatch } = typedHooks;
