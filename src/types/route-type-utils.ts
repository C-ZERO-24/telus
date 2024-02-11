/**
 * Adapted from https://github.com/fredericoo/react-router-typesafe
 * See https://github.com/remix-run/react-router/discussions/9792
 */

import { LoaderFunction, defer as rrDefer } from 'react-router-dom';

/** Unfortunately DeferredData is not exported by react-router-dom so we have to re-declare it */
export declare class DeferredData<TData extends Record<string, unknown>> {
  private pendingKeysSet;
  private controller;
  private abortPromise;
  private unlistenAbortSignal;
  private subscribers;
  data: TData;
  init?: ResponseInit;
  deferredKeys: string[];
  constructor(data: Record<string, unknown>, responseInit?: ResponseInit);
  private trackPromise;
  private onSettle;
  private emit;
  subscribe(fn: (aborted: boolean, settledKey?: string) => void): () => boolean;
  cancel(): void;
  resolveData(signal: AbortSignal): Promise<boolean>;
  get done(): boolean;
  get unwrappedData(): object;
  get pendingKeys(): string[];
}
type DeferFunction = <T extends Record<string, unknown>>(
  data: T,
  init?: number | ResponseInit,
) => DeferredData<T>;

/** Patch of react router’s defer to support generics. */
export const defer = rrDefer as unknown as DeferFunction;

/**
 * Use for typing the data returned by react routers useLoader function.
 * @link https://github.com/remix-run/react-router/discussions/9792
 * @example 
 * ```
 * import {LoaderFunction, useLoader} from 'react-router-dom';
 * 
 * // loader function definition utilizing satisfies
 * export const loader = (async () => {
  return await getContacts();
}) satisfies LoaderFunction;
 *
 * export function ContactsRoute() {
 *  const data = useLoader(getContacts) as LoaderData<typeof loader>;
 *  // ...other component code
 * }
 * ```
 */
export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<
  ReturnType<TLoaderFn>
> extends Response | infer D
  ? D extends DeferredData<infer TDeferred>
    ? TDeferred
    : D
  : never;
