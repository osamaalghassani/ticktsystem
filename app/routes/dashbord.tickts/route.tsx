import { TicktsTable } from './components/TicktsTable';

export function Component() {
  return (
    <>
      <TicktsTable />
      <Outlet />
    </>
  );
}
