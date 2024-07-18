export enum ROUTE {
  HOME = '/home',
}

export interface IRouteArgs {
  path: ROUTE;
  params?: Record<any, any>;
  queries?: Record<any, any>;
}

export function createRoutePath({path, params, queries}: IRouteArgs): string {
  // Save some CPU power for routes without params
  if (!params && !queries) return path;

  let pathBuilder: string = path;

  // Create a path by replacing params in the route definition
  if (params) {
      pathBuilder = Object.entries(params).reduce(
          (previousValue: string, [param, value]) => previousValue.replace(`:${param}`, '' + value),
          pathBuilder,
      );
  }

  if (queries) {
      pathBuilder = Object.entries(queries).reduce(
          (previousValue: string, [query, value]) => `${previousValue}${query}=${value}&`,
          pathBuilder + '?',
      );
      pathBuilder = pathBuilder.slice(0, -1); // remove last &
  }
  return pathBuilder;
}
