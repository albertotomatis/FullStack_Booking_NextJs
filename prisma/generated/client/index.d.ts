
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Prenotazione
 * 
 */
export type Prenotazione = $Result.DefaultSelection<Prisma.$PrenotazionePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Prenotaziones
 * const prenotaziones = await prisma.prenotazione.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Prenotaziones
   * const prenotaziones = await prisma.prenotazione.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.prenotazione`: Exposes CRUD operations for the **Prenotazione** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prenotaziones
    * const prenotaziones = await prisma.prenotazione.findMany()
    * ```
    */
  get prenotazione(): Prisma.PrenotazioneDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Prenotazione: 'Prenotazione'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'prenotazione'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Prenotazione: {
        payload: Prisma.$PrenotazionePayload<ExtArgs>
        fields: Prisma.PrenotazioneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrenotazioneFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrenotazioneFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          findFirst: {
            args: Prisma.PrenotazioneFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrenotazioneFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          findMany: {
            args: Prisma.PrenotazioneFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>[]
          }
          create: {
            args: Prisma.PrenotazioneCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          createMany: {
            args: Prisma.PrenotazioneCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PrenotazioneDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          update: {
            args: Prisma.PrenotazioneUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          deleteMany: {
            args: Prisma.PrenotazioneDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PrenotazioneUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PrenotazioneUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrenotazionePayload>
          }
          aggregate: {
            args: Prisma.PrenotazioneAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePrenotazione>
          }
          groupBy: {
            args: Prisma.PrenotazioneGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PrenotazioneGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrenotazioneCountArgs<ExtArgs>,
            result: $Utils.Optional<PrenotazioneCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Prenotazione
   */

  export type AggregatePrenotazione = {
    _count: PrenotazioneCountAggregateOutputType | null
    _avg: PrenotazioneAvgAggregateOutputType | null
    _sum: PrenotazioneSumAggregateOutputType | null
    _min: PrenotazioneMinAggregateOutputType | null
    _max: PrenotazioneMaxAggregateOutputType | null
  }

  export type PrenotazioneAvgAggregateOutputType = {
    id: number | null
  }

  export type PrenotazioneSumAggregateOutputType = {
    id: number | null
  }

  export type PrenotazioneMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cognome: string | null
    telefono: string | null
    email: string | null
    data: Date | null
    orario: string | null
  }

  export type PrenotazioneMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cognome: string | null
    telefono: string | null
    email: string | null
    data: Date | null
    orario: string | null
  }

  export type PrenotazioneCountAggregateOutputType = {
    id: number
    nome: number
    cognome: number
    telefono: number
    email: number
    data: number
    orario: number
    _all: number
  }


  export type PrenotazioneAvgAggregateInputType = {
    id?: true
  }

  export type PrenotazioneSumAggregateInputType = {
    id?: true
  }

  export type PrenotazioneMinAggregateInputType = {
    id?: true
    nome?: true
    cognome?: true
    telefono?: true
    email?: true
    data?: true
    orario?: true
  }

  export type PrenotazioneMaxAggregateInputType = {
    id?: true
    nome?: true
    cognome?: true
    telefono?: true
    email?: true
    data?: true
    orario?: true
  }

  export type PrenotazioneCountAggregateInputType = {
    id?: true
    nome?: true
    cognome?: true
    telefono?: true
    email?: true
    data?: true
    orario?: true
    _all?: true
  }

  export type PrenotazioneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prenotazione to aggregate.
     */
    where?: PrenotazioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prenotaziones to fetch.
     */
    orderBy?: PrenotazioneOrderByWithRelationInput | PrenotazioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrenotazioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prenotaziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prenotaziones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prenotaziones
    **/
    _count?: true | PrenotazioneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrenotazioneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrenotazioneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrenotazioneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrenotazioneMaxAggregateInputType
  }

  export type GetPrenotazioneAggregateType<T extends PrenotazioneAggregateArgs> = {
        [P in keyof T & keyof AggregatePrenotazione]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrenotazione[P]>
      : GetScalarType<T[P], AggregatePrenotazione[P]>
  }




  export type PrenotazioneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrenotazioneWhereInput
    orderBy?: PrenotazioneOrderByWithAggregationInput | PrenotazioneOrderByWithAggregationInput[]
    by: PrenotazioneScalarFieldEnum[] | PrenotazioneScalarFieldEnum
    having?: PrenotazioneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrenotazioneCountAggregateInputType | true
    _avg?: PrenotazioneAvgAggregateInputType
    _sum?: PrenotazioneSumAggregateInputType
    _min?: PrenotazioneMinAggregateInputType
    _max?: PrenotazioneMaxAggregateInputType
  }

  export type PrenotazioneGroupByOutputType = {
    id: number
    nome: string
    cognome: string
    telefono: string
    email: string
    data: Date
    orario: string
    _count: PrenotazioneCountAggregateOutputType | null
    _avg: PrenotazioneAvgAggregateOutputType | null
    _sum: PrenotazioneSumAggregateOutputType | null
    _min: PrenotazioneMinAggregateOutputType | null
    _max: PrenotazioneMaxAggregateOutputType | null
  }

  type GetPrenotazioneGroupByPayload<T extends PrenotazioneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrenotazioneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrenotazioneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrenotazioneGroupByOutputType[P]>
            : GetScalarType<T[P], PrenotazioneGroupByOutputType[P]>
        }
      >
    >


  export type PrenotazioneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cognome?: boolean
    telefono?: boolean
    email?: boolean
    data?: boolean
    orario?: boolean
  }, ExtArgs["result"]["prenotazione"]>

  export type PrenotazioneSelectScalar = {
    id?: boolean
    nome?: boolean
    cognome?: boolean
    telefono?: boolean
    email?: boolean
    data?: boolean
    orario?: boolean
  }


  export type $PrenotazionePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prenotazione"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cognome: string
      telefono: string
      email: string
      data: Date
      orario: string
    }, ExtArgs["result"]["prenotazione"]>
    composites: {}
  }


  type PrenotazioneGetPayload<S extends boolean | null | undefined | PrenotazioneDefaultArgs> = $Result.GetResult<Prisma.$PrenotazionePayload, S>

  type PrenotazioneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PrenotazioneFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PrenotazioneCountAggregateInputType | true
    }

  export interface PrenotazioneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prenotazione'], meta: { name: 'Prenotazione' } }
    /**
     * Find zero or one Prenotazione that matches the filter.
     * @param {PrenotazioneFindUniqueArgs} args - Arguments to find a Prenotazione
     * @example
     * // Get one Prenotazione
     * const prenotazione = await prisma.prenotazione.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrenotazioneFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PrenotazioneFindUniqueArgs<ExtArgs>>
    ): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Prenotazione that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PrenotazioneFindUniqueOrThrowArgs} args - Arguments to find a Prenotazione
     * @example
     * // Get one Prenotazione
     * const prenotazione = await prisma.prenotazione.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PrenotazioneFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrenotazioneFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Prenotazione that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneFindFirstArgs} args - Arguments to find a Prenotazione
     * @example
     * // Get one Prenotazione
     * const prenotazione = await prisma.prenotazione.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrenotazioneFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PrenotazioneFindFirstArgs<ExtArgs>>
    ): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Prenotazione that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneFindFirstOrThrowArgs} args - Arguments to find a Prenotazione
     * @example
     * // Get one Prenotazione
     * const prenotazione = await prisma.prenotazione.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PrenotazioneFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrenotazioneFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Prenotaziones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prenotaziones
     * const prenotaziones = await prisma.prenotazione.findMany()
     * 
     * // Get first 10 Prenotaziones
     * const prenotaziones = await prisma.prenotazione.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prenotazioneWithIdOnly = await prisma.prenotazione.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PrenotazioneFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrenotazioneFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Prenotazione.
     * @param {PrenotazioneCreateArgs} args - Arguments to create a Prenotazione.
     * @example
     * // Create one Prenotazione
     * const Prenotazione = await prisma.prenotazione.create({
     *   data: {
     *     // ... data to create a Prenotazione
     *   }
     * })
     * 
    **/
    create<T extends PrenotazioneCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PrenotazioneCreateArgs<ExtArgs>>
    ): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Prenotaziones.
     *     @param {PrenotazioneCreateManyArgs} args - Arguments to create many Prenotaziones.
     *     @example
     *     // Create many Prenotaziones
     *     const prenotazione = await prisma.prenotazione.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrenotazioneCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrenotazioneCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prenotazione.
     * @param {PrenotazioneDeleteArgs} args - Arguments to delete one Prenotazione.
     * @example
     * // Delete one Prenotazione
     * const Prenotazione = await prisma.prenotazione.delete({
     *   where: {
     *     // ... filter to delete one Prenotazione
     *   }
     * })
     * 
    **/
    delete<T extends PrenotazioneDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PrenotazioneDeleteArgs<ExtArgs>>
    ): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Prenotazione.
     * @param {PrenotazioneUpdateArgs} args - Arguments to update one Prenotazione.
     * @example
     * // Update one Prenotazione
     * const prenotazione = await prisma.prenotazione.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrenotazioneUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PrenotazioneUpdateArgs<ExtArgs>>
    ): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Prenotaziones.
     * @param {PrenotazioneDeleteManyArgs} args - Arguments to filter Prenotaziones to delete.
     * @example
     * // Delete a few Prenotaziones
     * const { count } = await prisma.prenotazione.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrenotazioneDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrenotazioneDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prenotaziones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prenotaziones
     * const prenotazione = await prisma.prenotazione.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrenotazioneUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PrenotazioneUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prenotazione.
     * @param {PrenotazioneUpsertArgs} args - Arguments to update or create a Prenotazione.
     * @example
     * // Update or create a Prenotazione
     * const prenotazione = await prisma.prenotazione.upsert({
     *   create: {
     *     // ... data to create a Prenotazione
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prenotazione we want to update
     *   }
     * })
    **/
    upsert<T extends PrenotazioneUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PrenotazioneUpsertArgs<ExtArgs>>
    ): Prisma__PrenotazioneClient<$Result.GetResult<Prisma.$PrenotazionePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Prenotaziones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneCountArgs} args - Arguments to filter Prenotaziones to count.
     * @example
     * // Count the number of Prenotaziones
     * const count = await prisma.prenotazione.count({
     *   where: {
     *     // ... the filter for the Prenotaziones we want to count
     *   }
     * })
    **/
    count<T extends PrenotazioneCountArgs>(
      args?: Subset<T, PrenotazioneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrenotazioneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prenotazione.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrenotazioneAggregateArgs>(args: Subset<T, PrenotazioneAggregateArgs>): Prisma.PrismaPromise<GetPrenotazioneAggregateType<T>>

    /**
     * Group by Prenotazione.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrenotazioneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrenotazioneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrenotazioneGroupByArgs['orderBy'] }
        : { orderBy?: PrenotazioneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrenotazioneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrenotazioneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prenotazione model
   */
  readonly fields: PrenotazioneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prenotazione.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrenotazioneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Prenotazione model
   */ 
  interface PrenotazioneFieldRefs {
    readonly id: FieldRef<"Prenotazione", 'Int'>
    readonly nome: FieldRef<"Prenotazione", 'String'>
    readonly cognome: FieldRef<"Prenotazione", 'String'>
    readonly telefono: FieldRef<"Prenotazione", 'String'>
    readonly email: FieldRef<"Prenotazione", 'String'>
    readonly data: FieldRef<"Prenotazione", 'DateTime'>
    readonly orario: FieldRef<"Prenotazione", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Prenotazione findUnique
   */
  export type PrenotazioneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Filter, which Prenotazione to fetch.
     */
    where: PrenotazioneWhereUniqueInput
  }


  /**
   * Prenotazione findUniqueOrThrow
   */
  export type PrenotazioneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Filter, which Prenotazione to fetch.
     */
    where: PrenotazioneWhereUniqueInput
  }


  /**
   * Prenotazione findFirst
   */
  export type PrenotazioneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Filter, which Prenotazione to fetch.
     */
    where?: PrenotazioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prenotaziones to fetch.
     */
    orderBy?: PrenotazioneOrderByWithRelationInput | PrenotazioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prenotaziones.
     */
    cursor?: PrenotazioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prenotaziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prenotaziones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prenotaziones.
     */
    distinct?: PrenotazioneScalarFieldEnum | PrenotazioneScalarFieldEnum[]
  }


  /**
   * Prenotazione findFirstOrThrow
   */
  export type PrenotazioneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Filter, which Prenotazione to fetch.
     */
    where?: PrenotazioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prenotaziones to fetch.
     */
    orderBy?: PrenotazioneOrderByWithRelationInput | PrenotazioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prenotaziones.
     */
    cursor?: PrenotazioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prenotaziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prenotaziones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prenotaziones.
     */
    distinct?: PrenotazioneScalarFieldEnum | PrenotazioneScalarFieldEnum[]
  }


  /**
   * Prenotazione findMany
   */
  export type PrenotazioneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Filter, which Prenotaziones to fetch.
     */
    where?: PrenotazioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prenotaziones to fetch.
     */
    orderBy?: PrenotazioneOrderByWithRelationInput | PrenotazioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prenotaziones.
     */
    cursor?: PrenotazioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prenotaziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prenotaziones.
     */
    skip?: number
    distinct?: PrenotazioneScalarFieldEnum | PrenotazioneScalarFieldEnum[]
  }


  /**
   * Prenotazione create
   */
  export type PrenotazioneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * The data needed to create a Prenotazione.
     */
    data: XOR<PrenotazioneCreateInput, PrenotazioneUncheckedCreateInput>
  }


  /**
   * Prenotazione createMany
   */
  export type PrenotazioneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prenotaziones.
     */
    data: PrenotazioneCreateManyInput | PrenotazioneCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Prenotazione update
   */
  export type PrenotazioneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * The data needed to update a Prenotazione.
     */
    data: XOR<PrenotazioneUpdateInput, PrenotazioneUncheckedUpdateInput>
    /**
     * Choose, which Prenotazione to update.
     */
    where: PrenotazioneWhereUniqueInput
  }


  /**
   * Prenotazione updateMany
   */
  export type PrenotazioneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prenotaziones.
     */
    data: XOR<PrenotazioneUpdateManyMutationInput, PrenotazioneUncheckedUpdateManyInput>
    /**
     * Filter which Prenotaziones to update
     */
    where?: PrenotazioneWhereInput
  }


  /**
   * Prenotazione upsert
   */
  export type PrenotazioneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * The filter to search for the Prenotazione to update in case it exists.
     */
    where: PrenotazioneWhereUniqueInput
    /**
     * In case the Prenotazione found by the `where` argument doesn't exist, create a new Prenotazione with this data.
     */
    create: XOR<PrenotazioneCreateInput, PrenotazioneUncheckedCreateInput>
    /**
     * In case the Prenotazione was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrenotazioneUpdateInput, PrenotazioneUncheckedUpdateInput>
  }


  /**
   * Prenotazione delete
   */
  export type PrenotazioneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
    /**
     * Filter which Prenotazione to delete.
     */
    where: PrenotazioneWhereUniqueInput
  }


  /**
   * Prenotazione deleteMany
   */
  export type PrenotazioneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prenotaziones to delete
     */
    where?: PrenotazioneWhereInput
  }


  /**
   * Prenotazione without action
   */
  export type PrenotazioneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prenotazione
     */
    select?: PrenotazioneSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PrenotazioneScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cognome: 'cognome',
    telefono: 'telefono',
    email: 'email',
    data: 'data',
    orario: 'orario'
  };

  export type PrenotazioneScalarFieldEnum = (typeof PrenotazioneScalarFieldEnum)[keyof typeof PrenotazioneScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PrenotazioneWhereInput = {
    AND?: PrenotazioneWhereInput | PrenotazioneWhereInput[]
    OR?: PrenotazioneWhereInput[]
    NOT?: PrenotazioneWhereInput | PrenotazioneWhereInput[]
    id?: IntFilter<"Prenotazione"> | number
    nome?: StringFilter<"Prenotazione"> | string
    cognome?: StringFilter<"Prenotazione"> | string
    telefono?: StringFilter<"Prenotazione"> | string
    email?: StringFilter<"Prenotazione"> | string
    data?: DateTimeFilter<"Prenotazione"> | Date | string
    orario?: StringFilter<"Prenotazione"> | string
  }

  export type PrenotazioneOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    data?: SortOrder
    orario?: SortOrder
  }

  export type PrenotazioneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrenotazioneWhereInput | PrenotazioneWhereInput[]
    OR?: PrenotazioneWhereInput[]
    NOT?: PrenotazioneWhereInput | PrenotazioneWhereInput[]
    nome?: StringFilter<"Prenotazione"> | string
    cognome?: StringFilter<"Prenotazione"> | string
    telefono?: StringFilter<"Prenotazione"> | string
    email?: StringFilter<"Prenotazione"> | string
    data?: DateTimeFilter<"Prenotazione"> | Date | string
    orario?: StringFilter<"Prenotazione"> | string
  }, "id">

  export type PrenotazioneOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    data?: SortOrder
    orario?: SortOrder
    _count?: PrenotazioneCountOrderByAggregateInput
    _avg?: PrenotazioneAvgOrderByAggregateInput
    _max?: PrenotazioneMaxOrderByAggregateInput
    _min?: PrenotazioneMinOrderByAggregateInput
    _sum?: PrenotazioneSumOrderByAggregateInput
  }

  export type PrenotazioneScalarWhereWithAggregatesInput = {
    AND?: PrenotazioneScalarWhereWithAggregatesInput | PrenotazioneScalarWhereWithAggregatesInput[]
    OR?: PrenotazioneScalarWhereWithAggregatesInput[]
    NOT?: PrenotazioneScalarWhereWithAggregatesInput | PrenotazioneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prenotazione"> | number
    nome?: StringWithAggregatesFilter<"Prenotazione"> | string
    cognome?: StringWithAggregatesFilter<"Prenotazione"> | string
    telefono?: StringWithAggregatesFilter<"Prenotazione"> | string
    email?: StringWithAggregatesFilter<"Prenotazione"> | string
    data?: DateTimeWithAggregatesFilter<"Prenotazione"> | Date | string
    orario?: StringWithAggregatesFilter<"Prenotazione"> | string
  }

  export type PrenotazioneCreateInput = {
    nome: string
    cognome: string
    telefono: string
    email: string
    data: Date | string
    orario: string
  }

  export type PrenotazioneUncheckedCreateInput = {
    id?: number
    nome: string
    cognome: string
    telefono: string
    email: string
    data: Date | string
    orario: string
  }

  export type PrenotazioneUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    orario?: StringFieldUpdateOperationsInput | string
  }

  export type PrenotazioneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    orario?: StringFieldUpdateOperationsInput | string
  }

  export type PrenotazioneCreateManyInput = {
    id?: number
    nome: string
    cognome: string
    telefono: string
    email: string
    data: Date | string
    orario: string
  }

  export type PrenotazioneUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    orario?: StringFieldUpdateOperationsInput | string
  }

  export type PrenotazioneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    orario?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PrenotazioneCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    data?: SortOrder
    orario?: SortOrder
  }

  export type PrenotazioneAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PrenotazioneMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    data?: SortOrder
    orario?: SortOrder
  }

  export type PrenotazioneMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    data?: SortOrder
    orario?: SortOrder
  }

  export type PrenotazioneSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PrenotazioneDefaultArgs instead
     */
    export type PrenotazioneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrenotazioneDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}