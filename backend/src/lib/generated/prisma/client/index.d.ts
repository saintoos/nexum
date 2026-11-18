
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BusinessProfile
 * 
 */
export type BusinessProfile = $Result.DefaultSelection<Prisma.$BusinessProfilePayload>
/**
 * Model AnalysisConfig
 * 
 */
export type AnalysisConfig = $Result.DefaultSelection<Prisma.$AnalysisConfigPayload>
/**
 * Model LocationAnalysis
 * 
 */
export type LocationAnalysis = $Result.DefaultSelection<Prisma.$LocationAnalysisPayload>
/**
 * Model FinancialAnalysis
 * 
 */
export type FinancialAnalysis = $Result.DefaultSelection<Prisma.$FinancialAnalysisPayload>
/**
 * Model FinancialPeriod
 * 
 */
export type FinancialPeriod = $Result.DefaultSelection<Prisma.$FinancialPeriodPayload>
/**
 * Model AiConsent
 * 
 */
export type AiConsent = $Result.DefaultSelection<Prisma.$AiConsentPayload>
/**
 * Model AiUsage
 * 
 */
export type AiUsage = $Result.DefaultSelection<Prisma.$AiUsagePayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  UMKM: 'UMKM'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ConfigModule: {
  LOCATION: 'LOCATION',
  FINANCIAL: 'FINANCIAL'
};

export type ConfigModule = (typeof ConfigModule)[keyof typeof ConfigModule]


export const LocationCategory: {
  LAYAK: 'LAYAK',
  TIDAK_LAYAK: 'TIDAK_LAYAK'
};

export type LocationCategory = (typeof LocationCategory)[keyof typeof LocationCategory]


export const RiskLevel: {
  SEHAT: 'SEHAT',
  WASPADA: 'WASPADA',
  RISIKO_TINGGI: 'RISIKO_TINGGI'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const ChatRole: {
  USER: 'USER',
  ASSISTANT: 'ASSISTANT'
};

export type ChatRole = (typeof ChatRole)[keyof typeof ChatRole]


export const LogLevel: {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  CRITICAL: 'CRITICAL'
};

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ConfigModule = $Enums.ConfigModule

export const ConfigModule: typeof $Enums.ConfigModule

export type LocationCategory = $Enums.LocationCategory

export const LocationCategory: typeof $Enums.LocationCategory

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type ChatRole = $Enums.ChatRole

export const ChatRole: typeof $Enums.ChatRole

export type LogLevel = $Enums.LogLevel

export const LogLevel: typeof $Enums.LogLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessProfile`: Exposes CRUD operations for the **BusinessProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessProfiles
    * const businessProfiles = await prisma.businessProfile.findMany()
    * ```
    */
  get businessProfile(): Prisma.BusinessProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisConfig`: Exposes CRUD operations for the **AnalysisConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisConfigs
    * const analysisConfigs = await prisma.analysisConfig.findMany()
    * ```
    */
  get analysisConfig(): Prisma.AnalysisConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locationAnalysis`: Exposes CRUD operations for the **LocationAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationAnalyses
    * const locationAnalyses = await prisma.locationAnalysis.findMany()
    * ```
    */
  get locationAnalysis(): Prisma.LocationAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialAnalysis`: Exposes CRUD operations for the **FinancialAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialAnalyses
    * const financialAnalyses = await prisma.financialAnalysis.findMany()
    * ```
    */
  get financialAnalysis(): Prisma.FinancialAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialPeriod`: Exposes CRUD operations for the **FinancialPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialPeriods
    * const financialPeriods = await prisma.financialPeriod.findMany()
    * ```
    */
  get financialPeriod(): Prisma.FinancialPeriodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiConsent`: Exposes CRUD operations for the **AiConsent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiConsents
    * const aiConsents = await prisma.aiConsent.findMany()
    * ```
    */
  get aiConsent(): Prisma.AiConsentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiUsage`: Exposes CRUD operations for the **AiUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiUsages
    * const aiUsages = await prisma.aiUsage.findMany()
    * ```
    */
  get aiUsage(): Prisma.AiUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    BusinessProfile: 'BusinessProfile',
    AnalysisConfig: 'AnalysisConfig',
    LocationAnalysis: 'LocationAnalysis',
    FinancialAnalysis: 'FinancialAnalysis',
    FinancialPeriod: 'FinancialPeriod',
    AiConsent: 'AiConsent',
    AiUsage: 'AiUsage',
    ChatMessage: 'ChatMessage',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "businessProfile" | "analysisConfig" | "locationAnalysis" | "financialAnalysis" | "financialPeriod" | "aiConsent" | "aiUsage" | "chatMessage" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BusinessProfile: {
        payload: Prisma.$BusinessProfilePayload<ExtArgs>
        fields: Prisma.BusinessProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          findFirst: {
            args: Prisma.BusinessProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          findMany: {
            args: Prisma.BusinessProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>[]
          }
          create: {
            args: Prisma.BusinessProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          createMany: {
            args: Prisma.BusinessProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>[]
          }
          delete: {
            args: Prisma.BusinessProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          update: {
            args: Prisma.BusinessProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          deleteMany: {
            args: Prisma.BusinessProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>[]
          }
          upsert: {
            args: Prisma.BusinessProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessProfilePayload>
          }
          aggregate: {
            args: Prisma.BusinessProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessProfile>
          }
          groupBy: {
            args: Prisma.BusinessProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessProfileCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessProfileCountAggregateOutputType> | number
          }
        }
      }
      AnalysisConfig: {
        payload: Prisma.$AnalysisConfigPayload<ExtArgs>
        fields: Prisma.AnalysisConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload>
          }
          findFirst: {
            args: Prisma.AnalysisConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload>
          }
          findMany: {
            args: Prisma.AnalysisConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload>[]
          }
          create: {
            args: Prisma.AnalysisConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload>
          }
          createMany: {
            args: Prisma.AnalysisConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload>[]
          }
          delete: {
            args: Prisma.AnalysisConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload>
          }
          update: {
            args: Prisma.AnalysisConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisConfigPayload>
          }
          aggregate: {
            args: Prisma.AnalysisConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisConfig>
          }
          groupBy: {
            args: Prisma.AnalysisConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisConfigCountAggregateOutputType> | number
          }
        }
      }
      LocationAnalysis: {
        payload: Prisma.$LocationAnalysisPayload<ExtArgs>
        fields: Prisma.LocationAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload>
          }
          findFirst: {
            args: Prisma.LocationAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload>
          }
          findMany: {
            args: Prisma.LocationAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload>[]
          }
          create: {
            args: Prisma.LocationAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload>
          }
          createMany: {
            args: Prisma.LocationAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload>[]
          }
          delete: {
            args: Prisma.LocationAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload>
          }
          update: {
            args: Prisma.LocationAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.LocationAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.LocationAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAnalysisPayload>
          }
          aggregate: {
            args: Prisma.LocationAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationAnalysis>
          }
          groupBy: {
            args: Prisma.LocationAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<LocationAnalysisCountAggregateOutputType> | number
          }
        }
      }
      FinancialAnalysis: {
        payload: Prisma.$FinancialAnalysisPayload<ExtArgs>
        fields: Prisma.FinancialAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          findFirst: {
            args: Prisma.FinancialAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          findMany: {
            args: Prisma.FinancialAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>[]
          }
          create: {
            args: Prisma.FinancialAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          createMany: {
            args: Prisma.FinancialAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>[]
          }
          delete: {
            args: Prisma.FinancialAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          update: {
            args: Prisma.FinancialAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.FinancialAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.FinancialAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          aggregate: {
            args: Prisma.FinancialAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialAnalysis>
          }
          groupBy: {
            args: Prisma.FinancialAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialAnalysisCountAggregateOutputType> | number
          }
        }
      }
      FinancialPeriod: {
        payload: Prisma.$FinancialPeriodPayload<ExtArgs>
        fields: Prisma.FinancialPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload>
          }
          findFirst: {
            args: Prisma.FinancialPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload>
          }
          findMany: {
            args: Prisma.FinancialPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload>[]
          }
          create: {
            args: Prisma.FinancialPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload>
          }
          createMany: {
            args: Prisma.FinancialPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialPeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload>[]
          }
          delete: {
            args: Prisma.FinancialPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload>
          }
          update: {
            args: Prisma.FinancialPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload>
          }
          deleteMany: {
            args: Prisma.FinancialPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialPeriodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload>[]
          }
          upsert: {
            args: Prisma.FinancialPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialPeriodPayload>
          }
          aggregate: {
            args: Prisma.FinancialPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialPeriod>
          }
          groupBy: {
            args: Prisma.FinancialPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialPeriodCountAggregateOutputType> | number
          }
        }
      }
      AiConsent: {
        payload: Prisma.$AiConsentPayload<ExtArgs>
        fields: Prisma.AiConsentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiConsentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiConsentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload>
          }
          findFirst: {
            args: Prisma.AiConsentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiConsentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload>
          }
          findMany: {
            args: Prisma.AiConsentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload>[]
          }
          create: {
            args: Prisma.AiConsentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload>
          }
          createMany: {
            args: Prisma.AiConsentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiConsentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload>[]
          }
          delete: {
            args: Prisma.AiConsentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload>
          }
          update: {
            args: Prisma.AiConsentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload>
          }
          deleteMany: {
            args: Prisma.AiConsentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiConsentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiConsentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload>[]
          }
          upsert: {
            args: Prisma.AiConsentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConsentPayload>
          }
          aggregate: {
            args: Prisma.AiConsentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiConsent>
          }
          groupBy: {
            args: Prisma.AiConsentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiConsentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiConsentCountArgs<ExtArgs>
            result: $Utils.Optional<AiConsentCountAggregateOutputType> | number
          }
        }
      }
      AiUsage: {
        payload: Prisma.$AiUsagePayload<ExtArgs>
        fields: Prisma.AiUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          findFirst: {
            args: Prisma.AiUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          findMany: {
            args: Prisma.AiUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>[]
          }
          create: {
            args: Prisma.AiUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          createMany: {
            args: Prisma.AiUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>[]
          }
          delete: {
            args: Prisma.AiUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          update: {
            args: Prisma.AiUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          deleteMany: {
            args: Prisma.AiUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>[]
          }
          upsert: {
            args: Prisma.AiUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          aggregate: {
            args: Prisma.AiUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiUsage>
          }
          groupBy: {
            args: Prisma.AiUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiUsageCountArgs<ExtArgs>
            result: $Utils.Optional<AiUsageCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    businessProfile?: BusinessProfileOmit
    analysisConfig?: AnalysisConfigOmit
    locationAnalysis?: LocationAnalysisOmit
    financialAnalysis?: FinancialAnalysisOmit
    financialPeriod?: FinancialPeriodOmit
    aiConsent?: AiConsentOmit
    aiUsage?: AiUsageOmit
    chatMessage?: ChatMessageOmit
    activityLog?: ActivityLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    locationAnalyses: number
    financialAnalyses: number
    financialPeriods: number
    aiUsages: number
    chatMessages: number
    activityLogs: number
    createdConfigs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationAnalyses?: boolean | UserCountOutputTypeCountLocationAnalysesArgs
    financialAnalyses?: boolean | UserCountOutputTypeCountFinancialAnalysesArgs
    financialPeriods?: boolean | UserCountOutputTypeCountFinancialPeriodsArgs
    aiUsages?: boolean | UserCountOutputTypeCountAiUsagesArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    createdConfigs?: boolean | UserCountOutputTypeCountCreatedConfigsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLocationAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationAnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinancialAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialAnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinancialPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialPeriodWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiUsageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisConfigWhereInput
  }


  /**
   * Count Type BusinessProfileCountOutputType
   */

  export type BusinessProfileCountOutputType = {
    locationAnalyses: number
    financialAnalyses: number
    financialPeriods: number
  }

  export type BusinessProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationAnalyses?: boolean | BusinessProfileCountOutputTypeCountLocationAnalysesArgs
    financialAnalyses?: boolean | BusinessProfileCountOutputTypeCountFinancialAnalysesArgs
    financialPeriods?: boolean | BusinessProfileCountOutputTypeCountFinancialPeriodsArgs
  }

  // Custom InputTypes
  /**
   * BusinessProfileCountOutputType without action
   */
  export type BusinessProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfileCountOutputType
     */
    select?: BusinessProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessProfileCountOutputType without action
   */
  export type BusinessProfileCountOutputTypeCountLocationAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationAnalysisWhereInput
  }

  /**
   * BusinessProfileCountOutputType without action
   */
  export type BusinessProfileCountOutputTypeCountFinancialAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialAnalysisWhereInput
  }

  /**
   * BusinessProfileCountOutputType without action
   */
  export type BusinessProfileCountOutputTypeCountFinancialPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialPeriodWhereInput
  }


  /**
   * Count Type AnalysisConfigCountOutputType
   */

  export type AnalysisConfigCountOutputType = {
    locationAnalyses: number
    financialAnalyses: number
  }

  export type AnalysisConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationAnalyses?: boolean | AnalysisConfigCountOutputTypeCountLocationAnalysesArgs
    financialAnalyses?: boolean | AnalysisConfigCountOutputTypeCountFinancialAnalysesArgs
  }

  // Custom InputTypes
  /**
   * AnalysisConfigCountOutputType without action
   */
  export type AnalysisConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfigCountOutputType
     */
    select?: AnalysisConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalysisConfigCountOutputType without action
   */
  export type AnalysisConfigCountOutputTypeCountLocationAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationAnalysisWhereInput
  }

  /**
   * AnalysisConfigCountOutputType without action
   */
  export type AnalysisConfigCountOutputTypeCountFinancialAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialAnalysisWhereInput
  }


  /**
   * Count Type FinancialAnalysisCountOutputType
   */

  export type FinancialAnalysisCountOutputType = {
    periods: number
  }

  export type FinancialAnalysisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    periods?: boolean | FinancialAnalysisCountOutputTypeCountPeriodsArgs
  }

  // Custom InputTypes
  /**
   * FinancialAnalysisCountOutputType without action
   */
  export type FinancialAnalysisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysisCountOutputType
     */
    select?: FinancialAnalysisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinancialAnalysisCountOutputType without action
   */
  export type FinancialAnalysisCountOutputTypeCountPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialPeriodWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessProfile?: boolean | User$businessProfileArgs<ExtArgs>
    locationAnalyses?: boolean | User$locationAnalysesArgs<ExtArgs>
    financialAnalyses?: boolean | User$financialAnalysesArgs<ExtArgs>
    financialPeriods?: boolean | User$financialPeriodsArgs<ExtArgs>
    aiConsent?: boolean | User$aiConsentArgs<ExtArgs>
    aiUsages?: boolean | User$aiUsagesArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    createdConfigs?: boolean | User$createdConfigsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessProfile?: boolean | User$businessProfileArgs<ExtArgs>
    locationAnalyses?: boolean | User$locationAnalysesArgs<ExtArgs>
    financialAnalyses?: boolean | User$financialAnalysesArgs<ExtArgs>
    financialPeriods?: boolean | User$financialPeriodsArgs<ExtArgs>
    aiConsent?: boolean | User$aiConsentArgs<ExtArgs>
    aiUsages?: boolean | User$aiUsagesArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    createdConfigs?: boolean | User$createdConfigsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      businessProfile: Prisma.$BusinessProfilePayload<ExtArgs> | null
      locationAnalyses: Prisma.$LocationAnalysisPayload<ExtArgs>[]
      financialAnalyses: Prisma.$FinancialAnalysisPayload<ExtArgs>[]
      financialPeriods: Prisma.$FinancialPeriodPayload<ExtArgs>[]
      aiConsent: Prisma.$AiConsentPayload<ExtArgs> | null
      aiUsages: Prisma.$AiUsagePayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      createdConfigs: Prisma.$AnalysisConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessProfile<T extends User$businessProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$businessProfileArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    locationAnalyses<T extends User$locationAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, User$locationAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialAnalyses<T extends User$financialAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, User$financialAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialPeriods<T extends User$financialPeriodsArgs<ExtArgs> = {}>(args?: Subset<T, User$financialPeriodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiConsent<T extends User$aiConsentArgs<ExtArgs> = {}>(args?: Subset<T, User$aiConsentArgs<ExtArgs>>): Prisma__AiConsentClient<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aiUsages<T extends User$aiUsagesArgs<ExtArgs> = {}>(args?: Subset<T, User$aiUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdConfigs<T extends User$createdConfigsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.businessProfile
   */
  export type User$businessProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    where?: BusinessProfileWhereInput
  }

  /**
   * User.locationAnalyses
   */
  export type User$locationAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    where?: LocationAnalysisWhereInput
    orderBy?: LocationAnalysisOrderByWithRelationInput | LocationAnalysisOrderByWithRelationInput[]
    cursor?: LocationAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationAnalysisScalarFieldEnum | LocationAnalysisScalarFieldEnum[]
  }

  /**
   * User.financialAnalyses
   */
  export type User$financialAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    where?: FinancialAnalysisWhereInput
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    cursor?: FinancialAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * User.financialPeriods
   */
  export type User$financialPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    where?: FinancialPeriodWhereInput
    orderBy?: FinancialPeriodOrderByWithRelationInput | FinancialPeriodOrderByWithRelationInput[]
    cursor?: FinancialPeriodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialPeriodScalarFieldEnum | FinancialPeriodScalarFieldEnum[]
  }

  /**
   * User.aiConsent
   */
  export type User$aiConsentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    where?: AiConsentWhereInput
  }

  /**
   * User.aiUsages
   */
  export type User$aiUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    where?: AiUsageWhereInput
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    cursor?: AiUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.createdConfigs
   */
  export type User$createdConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    where?: AnalysisConfigWhereInput
    orderBy?: AnalysisConfigOrderByWithRelationInput | AnalysisConfigOrderByWithRelationInput[]
    cursor?: AnalysisConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisConfigScalarFieldEnum | AnalysisConfigScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BusinessProfile
   */

  export type AggregateBusinessProfile = {
    _count: BusinessProfileCountAggregateOutputType | null
    _avg: BusinessProfileAvgAggregateOutputType | null
    _sum: BusinessProfileSumAggregateOutputType | null
    _min: BusinessProfileMinAggregateOutputType | null
    _max: BusinessProfileMaxAggregateOutputType | null
  }

  export type BusinessProfileAvgAggregateOutputType = {
    quarterlyRevenueTarget: Decimal | null
  }

  export type BusinessProfileSumAggregateOutputType = {
    quarterlyRevenueTarget: Decimal | null
  }

  export type BusinessProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    sector: string | null
    sectorOther: string | null
    address: string | null
    quarterlyRevenueTarget: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    sector: string | null
    sectorOther: string | null
    address: string | null
    quarterlyRevenueTarget: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    sector: number
    sectorOther: number
    address: number
    quarterlyRevenueTarget: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessProfileAvgAggregateInputType = {
    quarterlyRevenueTarget?: true
  }

  export type BusinessProfileSumAggregateInputType = {
    quarterlyRevenueTarget?: true
  }

  export type BusinessProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    sector?: true
    sectorOther?: true
    address?: true
    quarterlyRevenueTarget?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    sector?: true
    sectorOther?: true
    address?: true
    quarterlyRevenueTarget?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    sector?: true
    sectorOther?: true
    address?: true
    quarterlyRevenueTarget?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessProfile to aggregate.
     */
    where?: BusinessProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessProfiles to fetch.
     */
    orderBy?: BusinessProfileOrderByWithRelationInput | BusinessProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessProfiles
    **/
    _count?: true | BusinessProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessProfileMaxAggregateInputType
  }

  export type GetBusinessProfileAggregateType<T extends BusinessProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessProfile[P]>
      : GetScalarType<T[P], AggregateBusinessProfile[P]>
  }




  export type BusinessProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessProfileWhereInput
    orderBy?: BusinessProfileOrderByWithAggregationInput | BusinessProfileOrderByWithAggregationInput[]
    by: BusinessProfileScalarFieldEnum[] | BusinessProfileScalarFieldEnum
    having?: BusinessProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessProfileCountAggregateInputType | true
    _avg?: BusinessProfileAvgAggregateInputType
    _sum?: BusinessProfileSumAggregateInputType
    _min?: BusinessProfileMinAggregateInputType
    _max?: BusinessProfileMaxAggregateInputType
  }

  export type BusinessProfileGroupByOutputType = {
    id: string
    userId: string
    name: string
    sector: string
    sectorOther: string | null
    address: string
    quarterlyRevenueTarget: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: BusinessProfileCountAggregateOutputType | null
    _avg: BusinessProfileAvgAggregateOutputType | null
    _sum: BusinessProfileSumAggregateOutputType | null
    _min: BusinessProfileMinAggregateOutputType | null
    _max: BusinessProfileMaxAggregateOutputType | null
  }

  type GetBusinessProfileGroupByPayload<T extends BusinessProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessProfileGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessProfileGroupByOutputType[P]>
        }
      >
    >


  export type BusinessProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    sector?: boolean
    sectorOther?: boolean
    address?: boolean
    quarterlyRevenueTarget?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    locationAnalyses?: boolean | BusinessProfile$locationAnalysesArgs<ExtArgs>
    financialAnalyses?: boolean | BusinessProfile$financialAnalysesArgs<ExtArgs>
    financialPeriods?: boolean | BusinessProfile$financialPeriodsArgs<ExtArgs>
    _count?: boolean | BusinessProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessProfile"]>

  export type BusinessProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    sector?: boolean
    sectorOther?: boolean
    address?: boolean
    quarterlyRevenueTarget?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessProfile"]>

  export type BusinessProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    sector?: boolean
    sectorOther?: boolean
    address?: boolean
    quarterlyRevenueTarget?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessProfile"]>

  export type BusinessProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    sector?: boolean
    sectorOther?: boolean
    address?: boolean
    quarterlyRevenueTarget?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "sector" | "sectorOther" | "address" | "quarterlyRevenueTarget" | "createdAt" | "updatedAt", ExtArgs["result"]["businessProfile"]>
  export type BusinessProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    locationAnalyses?: boolean | BusinessProfile$locationAnalysesArgs<ExtArgs>
    financialAnalyses?: boolean | BusinessProfile$financialAnalysesArgs<ExtArgs>
    financialPeriods?: boolean | BusinessProfile$financialPeriodsArgs<ExtArgs>
    _count?: boolean | BusinessProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      locationAnalyses: Prisma.$LocationAnalysisPayload<ExtArgs>[]
      financialAnalyses: Prisma.$FinancialAnalysisPayload<ExtArgs>[]
      financialPeriods: Prisma.$FinancialPeriodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      sector: string
      sectorOther: string | null
      address: string
      quarterlyRevenueTarget: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessProfile"]>
    composites: {}
  }

  type BusinessProfileGetPayload<S extends boolean | null | undefined | BusinessProfileDefaultArgs> = $Result.GetResult<Prisma.$BusinessProfilePayload, S>

  type BusinessProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessProfileCountAggregateInputType | true
    }

  export interface BusinessProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessProfile'], meta: { name: 'BusinessProfile' } }
    /**
     * Find zero or one BusinessProfile that matches the filter.
     * @param {BusinessProfileFindUniqueArgs} args - Arguments to find a BusinessProfile
     * @example
     * // Get one BusinessProfile
     * const businessProfile = await prisma.businessProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessProfileFindUniqueArgs>(args: SelectSubset<T, BusinessProfileFindUniqueArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessProfileFindUniqueOrThrowArgs} args - Arguments to find a BusinessProfile
     * @example
     * // Get one BusinessProfile
     * const businessProfile = await prisma.businessProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileFindFirstArgs} args - Arguments to find a BusinessProfile
     * @example
     * // Get one BusinessProfile
     * const businessProfile = await prisma.businessProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessProfileFindFirstArgs>(args?: SelectSubset<T, BusinessProfileFindFirstArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileFindFirstOrThrowArgs} args - Arguments to find a BusinessProfile
     * @example
     * // Get one BusinessProfile
     * const businessProfile = await prisma.businessProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessProfiles
     * const businessProfiles = await prisma.businessProfile.findMany()
     * 
     * // Get first 10 BusinessProfiles
     * const businessProfiles = await prisma.businessProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessProfileWithIdOnly = await prisma.businessProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessProfileFindManyArgs>(args?: SelectSubset<T, BusinessProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessProfile.
     * @param {BusinessProfileCreateArgs} args - Arguments to create a BusinessProfile.
     * @example
     * // Create one BusinessProfile
     * const BusinessProfile = await prisma.businessProfile.create({
     *   data: {
     *     // ... data to create a BusinessProfile
     *   }
     * })
     * 
     */
    create<T extends BusinessProfileCreateArgs>(args: SelectSubset<T, BusinessProfileCreateArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessProfiles.
     * @param {BusinessProfileCreateManyArgs} args - Arguments to create many BusinessProfiles.
     * @example
     * // Create many BusinessProfiles
     * const businessProfile = await prisma.businessProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessProfileCreateManyArgs>(args?: SelectSubset<T, BusinessProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessProfiles and returns the data saved in the database.
     * @param {BusinessProfileCreateManyAndReturnArgs} args - Arguments to create many BusinessProfiles.
     * @example
     * // Create many BusinessProfiles
     * const businessProfile = await prisma.businessProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessProfiles and only return the `id`
     * const businessProfileWithIdOnly = await prisma.businessProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessProfile.
     * @param {BusinessProfileDeleteArgs} args - Arguments to delete one BusinessProfile.
     * @example
     * // Delete one BusinessProfile
     * const BusinessProfile = await prisma.businessProfile.delete({
     *   where: {
     *     // ... filter to delete one BusinessProfile
     *   }
     * })
     * 
     */
    delete<T extends BusinessProfileDeleteArgs>(args: SelectSubset<T, BusinessProfileDeleteArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessProfile.
     * @param {BusinessProfileUpdateArgs} args - Arguments to update one BusinessProfile.
     * @example
     * // Update one BusinessProfile
     * const businessProfile = await prisma.businessProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessProfileUpdateArgs>(args: SelectSubset<T, BusinessProfileUpdateArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessProfiles.
     * @param {BusinessProfileDeleteManyArgs} args - Arguments to filter BusinessProfiles to delete.
     * @example
     * // Delete a few BusinessProfiles
     * const { count } = await prisma.businessProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessProfileDeleteManyArgs>(args?: SelectSubset<T, BusinessProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessProfiles
     * const businessProfile = await prisma.businessProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessProfileUpdateManyArgs>(args: SelectSubset<T, BusinessProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessProfiles and returns the data updated in the database.
     * @param {BusinessProfileUpdateManyAndReturnArgs} args - Arguments to update many BusinessProfiles.
     * @example
     * // Update many BusinessProfiles
     * const businessProfile = await prisma.businessProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessProfiles and only return the `id`
     * const businessProfileWithIdOnly = await prisma.businessProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessProfile.
     * @param {BusinessProfileUpsertArgs} args - Arguments to update or create a BusinessProfile.
     * @example
     * // Update or create a BusinessProfile
     * const businessProfile = await prisma.businessProfile.upsert({
     *   create: {
     *     // ... data to create a BusinessProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessProfile we want to update
     *   }
     * })
     */
    upsert<T extends BusinessProfileUpsertArgs>(args: SelectSubset<T, BusinessProfileUpsertArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileCountArgs} args - Arguments to filter BusinessProfiles to count.
     * @example
     * // Count the number of BusinessProfiles
     * const count = await prisma.businessProfile.count({
     *   where: {
     *     // ... the filter for the BusinessProfiles we want to count
     *   }
     * })
    **/
    count<T extends BusinessProfileCountArgs>(
      args?: Subset<T, BusinessProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessProfileAggregateArgs>(args: Subset<T, BusinessProfileAggregateArgs>): Prisma.PrismaPromise<GetBusinessProfileAggregateType<T>>

    /**
     * Group by BusinessProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessProfileGroupByArgs} args - Group by arguments.
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
      T extends BusinessProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessProfileGroupByArgs['orderBy'] }
        : { orderBy?: BusinessProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessProfile model
   */
  readonly fields: BusinessProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locationAnalyses<T extends BusinessProfile$locationAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, BusinessProfile$locationAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialAnalyses<T extends BusinessProfile$financialAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, BusinessProfile$financialAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialPeriods<T extends BusinessProfile$financialPeriodsArgs<ExtArgs> = {}>(args?: Subset<T, BusinessProfile$financialPeriodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessProfile model
   */
  interface BusinessProfileFieldRefs {
    readonly id: FieldRef<"BusinessProfile", 'String'>
    readonly userId: FieldRef<"BusinessProfile", 'String'>
    readonly name: FieldRef<"BusinessProfile", 'String'>
    readonly sector: FieldRef<"BusinessProfile", 'String'>
    readonly sectorOther: FieldRef<"BusinessProfile", 'String'>
    readonly address: FieldRef<"BusinessProfile", 'String'>
    readonly quarterlyRevenueTarget: FieldRef<"BusinessProfile", 'Decimal'>
    readonly createdAt: FieldRef<"BusinessProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessProfile findUnique
   */
  export type BusinessProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfile to fetch.
     */
    where: BusinessProfileWhereUniqueInput
  }

  /**
   * BusinessProfile findUniqueOrThrow
   */
  export type BusinessProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfile to fetch.
     */
    where: BusinessProfileWhereUniqueInput
  }

  /**
   * BusinessProfile findFirst
   */
  export type BusinessProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfile to fetch.
     */
    where?: BusinessProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessProfiles to fetch.
     */
    orderBy?: BusinessProfileOrderByWithRelationInput | BusinessProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessProfiles.
     */
    cursor?: BusinessProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessProfiles.
     */
    distinct?: BusinessProfileScalarFieldEnum | BusinessProfileScalarFieldEnum[]
  }

  /**
   * BusinessProfile findFirstOrThrow
   */
  export type BusinessProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfile to fetch.
     */
    where?: BusinessProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessProfiles to fetch.
     */
    orderBy?: BusinessProfileOrderByWithRelationInput | BusinessProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessProfiles.
     */
    cursor?: BusinessProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessProfiles.
     */
    distinct?: BusinessProfileScalarFieldEnum | BusinessProfileScalarFieldEnum[]
  }

  /**
   * BusinessProfile findMany
   */
  export type BusinessProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter, which BusinessProfiles to fetch.
     */
    where?: BusinessProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessProfiles to fetch.
     */
    orderBy?: BusinessProfileOrderByWithRelationInput | BusinessProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessProfiles.
     */
    cursor?: BusinessProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessProfiles.
     */
    distinct?: BusinessProfileScalarFieldEnum | BusinessProfileScalarFieldEnum[]
  }

  /**
   * BusinessProfile create
   */
  export type BusinessProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessProfile.
     */
    data: XOR<BusinessProfileCreateInput, BusinessProfileUncheckedCreateInput>
  }

  /**
   * BusinessProfile createMany
   */
  export type BusinessProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessProfiles.
     */
    data: BusinessProfileCreateManyInput | BusinessProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessProfile createManyAndReturn
   */
  export type BusinessProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessProfiles.
     */
    data: BusinessProfileCreateManyInput | BusinessProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessProfile update
   */
  export type BusinessProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessProfile.
     */
    data: XOR<BusinessProfileUpdateInput, BusinessProfileUncheckedUpdateInput>
    /**
     * Choose, which BusinessProfile to update.
     */
    where: BusinessProfileWhereUniqueInput
  }

  /**
   * BusinessProfile updateMany
   */
  export type BusinessProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessProfiles.
     */
    data: XOR<BusinessProfileUpdateManyMutationInput, BusinessProfileUncheckedUpdateManyInput>
    /**
     * Filter which BusinessProfiles to update
     */
    where?: BusinessProfileWhereInput
    /**
     * Limit how many BusinessProfiles to update.
     */
    limit?: number
  }

  /**
   * BusinessProfile updateManyAndReturn
   */
  export type BusinessProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * The data used to update BusinessProfiles.
     */
    data: XOR<BusinessProfileUpdateManyMutationInput, BusinessProfileUncheckedUpdateManyInput>
    /**
     * Filter which BusinessProfiles to update
     */
    where?: BusinessProfileWhereInput
    /**
     * Limit how many BusinessProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessProfile upsert
   */
  export type BusinessProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessProfile to update in case it exists.
     */
    where: BusinessProfileWhereUniqueInput
    /**
     * In case the BusinessProfile found by the `where` argument doesn't exist, create a new BusinessProfile with this data.
     */
    create: XOR<BusinessProfileCreateInput, BusinessProfileUncheckedCreateInput>
    /**
     * In case the BusinessProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessProfileUpdateInput, BusinessProfileUncheckedUpdateInput>
  }

  /**
   * BusinessProfile delete
   */
  export type BusinessProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
    /**
     * Filter which BusinessProfile to delete.
     */
    where: BusinessProfileWhereUniqueInput
  }

  /**
   * BusinessProfile deleteMany
   */
  export type BusinessProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessProfiles to delete
     */
    where?: BusinessProfileWhereInput
    /**
     * Limit how many BusinessProfiles to delete.
     */
    limit?: number
  }

  /**
   * BusinessProfile.locationAnalyses
   */
  export type BusinessProfile$locationAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    where?: LocationAnalysisWhereInput
    orderBy?: LocationAnalysisOrderByWithRelationInput | LocationAnalysisOrderByWithRelationInput[]
    cursor?: LocationAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationAnalysisScalarFieldEnum | LocationAnalysisScalarFieldEnum[]
  }

  /**
   * BusinessProfile.financialAnalyses
   */
  export type BusinessProfile$financialAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    where?: FinancialAnalysisWhereInput
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    cursor?: FinancialAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * BusinessProfile.financialPeriods
   */
  export type BusinessProfile$financialPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    where?: FinancialPeriodWhereInput
    orderBy?: FinancialPeriodOrderByWithRelationInput | FinancialPeriodOrderByWithRelationInput[]
    cursor?: FinancialPeriodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialPeriodScalarFieldEnum | FinancialPeriodScalarFieldEnum[]
  }

  /**
   * BusinessProfile without action
   */
  export type BusinessProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessProfile
     */
    select?: BusinessProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessProfile
     */
    omit?: BusinessProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessProfileInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisConfig
   */

  export type AggregateAnalysisConfig = {
    _count: AnalysisConfigCountAggregateOutputType | null
    _avg: AnalysisConfigAvgAggregateOutputType | null
    _sum: AnalysisConfigSumAggregateOutputType | null
    _min: AnalysisConfigMinAggregateOutputType | null
    _max: AnalysisConfigMaxAggregateOutputType | null
  }

  export type AnalysisConfigAvgAggregateOutputType = {
    versionNumber: number | null
  }

  export type AnalysisConfigSumAggregateOutputType = {
    versionNumber: number | null
  }

  export type AnalysisConfigMinAggregateOutputType = {
    id: string | null
    module: $Enums.ConfigModule | null
    versionNumber: number | null
    isActive: boolean | null
    note: string | null
    createdById: string | null
    activatedAt: Date | null
    createdAt: Date | null
  }

  export type AnalysisConfigMaxAggregateOutputType = {
    id: string | null
    module: $Enums.ConfigModule | null
    versionNumber: number | null
    isActive: boolean | null
    note: string | null
    createdById: string | null
    activatedAt: Date | null
    createdAt: Date | null
  }

  export type AnalysisConfigCountAggregateOutputType = {
    id: number
    module: number
    versionNumber: number
    isActive: number
    parameters: number
    note: number
    createdById: number
    activatedAt: number
    createdAt: number
    _all: number
  }


  export type AnalysisConfigAvgAggregateInputType = {
    versionNumber?: true
  }

  export type AnalysisConfigSumAggregateInputType = {
    versionNumber?: true
  }

  export type AnalysisConfigMinAggregateInputType = {
    id?: true
    module?: true
    versionNumber?: true
    isActive?: true
    note?: true
    createdById?: true
    activatedAt?: true
    createdAt?: true
  }

  export type AnalysisConfigMaxAggregateInputType = {
    id?: true
    module?: true
    versionNumber?: true
    isActive?: true
    note?: true
    createdById?: true
    activatedAt?: true
    createdAt?: true
  }

  export type AnalysisConfigCountAggregateInputType = {
    id?: true
    module?: true
    versionNumber?: true
    isActive?: true
    parameters?: true
    note?: true
    createdById?: true
    activatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AnalysisConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisConfig to aggregate.
     */
    where?: AnalysisConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisConfigs to fetch.
     */
    orderBy?: AnalysisConfigOrderByWithRelationInput | AnalysisConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisConfigs
    **/
    _count?: true | AnalysisConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisConfigMaxAggregateInputType
  }

  export type GetAnalysisConfigAggregateType<T extends AnalysisConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisConfig[P]>
      : GetScalarType<T[P], AggregateAnalysisConfig[P]>
  }




  export type AnalysisConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisConfigWhereInput
    orderBy?: AnalysisConfigOrderByWithAggregationInput | AnalysisConfigOrderByWithAggregationInput[]
    by: AnalysisConfigScalarFieldEnum[] | AnalysisConfigScalarFieldEnum
    having?: AnalysisConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisConfigCountAggregateInputType | true
    _avg?: AnalysisConfigAvgAggregateInputType
    _sum?: AnalysisConfigSumAggregateInputType
    _min?: AnalysisConfigMinAggregateInputType
    _max?: AnalysisConfigMaxAggregateInputType
  }

  export type AnalysisConfigGroupByOutputType = {
    id: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive: boolean
    parameters: JsonValue
    note: string | null
    createdById: string | null
    activatedAt: Date | null
    createdAt: Date
    _count: AnalysisConfigCountAggregateOutputType | null
    _avg: AnalysisConfigAvgAggregateOutputType | null
    _sum: AnalysisConfigSumAggregateOutputType | null
    _min: AnalysisConfigMinAggregateOutputType | null
    _max: AnalysisConfigMaxAggregateOutputType | null
  }

  type GetAnalysisConfigGroupByPayload<T extends AnalysisConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisConfigGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module?: boolean
    versionNumber?: boolean
    isActive?: boolean
    parameters?: boolean
    note?: boolean
    createdById?: boolean
    activatedAt?: boolean
    createdAt?: boolean
    createdBy?: boolean | AnalysisConfig$createdByArgs<ExtArgs>
    locationAnalyses?: boolean | AnalysisConfig$locationAnalysesArgs<ExtArgs>
    financialAnalyses?: boolean | AnalysisConfig$financialAnalysesArgs<ExtArgs>
    _count?: boolean | AnalysisConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisConfig"]>

  export type AnalysisConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module?: boolean
    versionNumber?: boolean
    isActive?: boolean
    parameters?: boolean
    note?: boolean
    createdById?: boolean
    activatedAt?: boolean
    createdAt?: boolean
    createdBy?: boolean | AnalysisConfig$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["analysisConfig"]>

  export type AnalysisConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module?: boolean
    versionNumber?: boolean
    isActive?: boolean
    parameters?: boolean
    note?: boolean
    createdById?: boolean
    activatedAt?: boolean
    createdAt?: boolean
    createdBy?: boolean | AnalysisConfig$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["analysisConfig"]>

  export type AnalysisConfigSelectScalar = {
    id?: boolean
    module?: boolean
    versionNumber?: boolean
    isActive?: boolean
    parameters?: boolean
    note?: boolean
    createdById?: boolean
    activatedAt?: boolean
    createdAt?: boolean
  }

  export type AnalysisConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "module" | "versionNumber" | "isActive" | "parameters" | "note" | "createdById" | "activatedAt" | "createdAt", ExtArgs["result"]["analysisConfig"]>
  export type AnalysisConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | AnalysisConfig$createdByArgs<ExtArgs>
    locationAnalyses?: boolean | AnalysisConfig$locationAnalysesArgs<ExtArgs>
    financialAnalyses?: boolean | AnalysisConfig$financialAnalysesArgs<ExtArgs>
    _count?: boolean | AnalysisConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnalysisConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | AnalysisConfig$createdByArgs<ExtArgs>
  }
  export type AnalysisConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | AnalysisConfig$createdByArgs<ExtArgs>
  }

  export type $AnalysisConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisConfig"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      locationAnalyses: Prisma.$LocationAnalysisPayload<ExtArgs>[]
      financialAnalyses: Prisma.$FinancialAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      module: $Enums.ConfigModule
      versionNumber: number
      isActive: boolean
      parameters: Prisma.JsonValue
      note: string | null
      createdById: string | null
      activatedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["analysisConfig"]>
    composites: {}
  }

  type AnalysisConfigGetPayload<S extends boolean | null | undefined | AnalysisConfigDefaultArgs> = $Result.GetResult<Prisma.$AnalysisConfigPayload, S>

  type AnalysisConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisConfigCountAggregateInputType | true
    }

  export interface AnalysisConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisConfig'], meta: { name: 'AnalysisConfig' } }
    /**
     * Find zero or one AnalysisConfig that matches the filter.
     * @param {AnalysisConfigFindUniqueArgs} args - Arguments to find a AnalysisConfig
     * @example
     * // Get one AnalysisConfig
     * const analysisConfig = await prisma.analysisConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisConfigFindUniqueArgs>(args: SelectSubset<T, AnalysisConfigFindUniqueArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisConfigFindUniqueOrThrowArgs} args - Arguments to find a AnalysisConfig
     * @example
     * // Get one AnalysisConfig
     * const analysisConfig = await prisma.analysisConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisConfigFindFirstArgs} args - Arguments to find a AnalysisConfig
     * @example
     * // Get one AnalysisConfig
     * const analysisConfig = await prisma.analysisConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisConfigFindFirstArgs>(args?: SelectSubset<T, AnalysisConfigFindFirstArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisConfigFindFirstOrThrowArgs} args - Arguments to find a AnalysisConfig
     * @example
     * // Get one AnalysisConfig
     * const analysisConfig = await prisma.analysisConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisConfigs
     * const analysisConfigs = await prisma.analysisConfig.findMany()
     * 
     * // Get first 10 AnalysisConfigs
     * const analysisConfigs = await prisma.analysisConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisConfigWithIdOnly = await prisma.analysisConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisConfigFindManyArgs>(args?: SelectSubset<T, AnalysisConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisConfig.
     * @param {AnalysisConfigCreateArgs} args - Arguments to create a AnalysisConfig.
     * @example
     * // Create one AnalysisConfig
     * const AnalysisConfig = await prisma.analysisConfig.create({
     *   data: {
     *     // ... data to create a AnalysisConfig
     *   }
     * })
     * 
     */
    create<T extends AnalysisConfigCreateArgs>(args: SelectSubset<T, AnalysisConfigCreateArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisConfigs.
     * @param {AnalysisConfigCreateManyArgs} args - Arguments to create many AnalysisConfigs.
     * @example
     * // Create many AnalysisConfigs
     * const analysisConfig = await prisma.analysisConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisConfigCreateManyArgs>(args?: SelectSubset<T, AnalysisConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisConfigs and returns the data saved in the database.
     * @param {AnalysisConfigCreateManyAndReturnArgs} args - Arguments to create many AnalysisConfigs.
     * @example
     * // Create many AnalysisConfigs
     * const analysisConfig = await prisma.analysisConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisConfigs and only return the `id`
     * const analysisConfigWithIdOnly = await prisma.analysisConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisConfig.
     * @param {AnalysisConfigDeleteArgs} args - Arguments to delete one AnalysisConfig.
     * @example
     * // Delete one AnalysisConfig
     * const AnalysisConfig = await prisma.analysisConfig.delete({
     *   where: {
     *     // ... filter to delete one AnalysisConfig
     *   }
     * })
     * 
     */
    delete<T extends AnalysisConfigDeleteArgs>(args: SelectSubset<T, AnalysisConfigDeleteArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisConfig.
     * @param {AnalysisConfigUpdateArgs} args - Arguments to update one AnalysisConfig.
     * @example
     * // Update one AnalysisConfig
     * const analysisConfig = await prisma.analysisConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisConfigUpdateArgs>(args: SelectSubset<T, AnalysisConfigUpdateArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisConfigs.
     * @param {AnalysisConfigDeleteManyArgs} args - Arguments to filter AnalysisConfigs to delete.
     * @example
     * // Delete a few AnalysisConfigs
     * const { count } = await prisma.analysisConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisConfigDeleteManyArgs>(args?: SelectSubset<T, AnalysisConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisConfigs
     * const analysisConfig = await prisma.analysisConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisConfigUpdateManyArgs>(args: SelectSubset<T, AnalysisConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisConfigs and returns the data updated in the database.
     * @param {AnalysisConfigUpdateManyAndReturnArgs} args - Arguments to update many AnalysisConfigs.
     * @example
     * // Update many AnalysisConfigs
     * const analysisConfig = await prisma.analysisConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisConfigs and only return the `id`
     * const analysisConfigWithIdOnly = await prisma.analysisConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisConfig.
     * @param {AnalysisConfigUpsertArgs} args - Arguments to update or create a AnalysisConfig.
     * @example
     * // Update or create a AnalysisConfig
     * const analysisConfig = await prisma.analysisConfig.upsert({
     *   create: {
     *     // ... data to create a AnalysisConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisConfig we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisConfigUpsertArgs>(args: SelectSubset<T, AnalysisConfigUpsertArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisConfigCountArgs} args - Arguments to filter AnalysisConfigs to count.
     * @example
     * // Count the number of AnalysisConfigs
     * const count = await prisma.analysisConfig.count({
     *   where: {
     *     // ... the filter for the AnalysisConfigs we want to count
     *   }
     * })
    **/
    count<T extends AnalysisConfigCountArgs>(
      args?: Subset<T, AnalysisConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisConfigAggregateArgs>(args: Subset<T, AnalysisConfigAggregateArgs>): Prisma.PrismaPromise<GetAnalysisConfigAggregateType<T>>

    /**
     * Group by AnalysisConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisConfigGroupByArgs} args - Group by arguments.
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
      T extends AnalysisConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisConfigGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisConfig model
   */
  readonly fields: AnalysisConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends AnalysisConfig$createdByArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisConfig$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    locationAnalyses<T extends AnalysisConfig$locationAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisConfig$locationAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialAnalyses<T extends AnalysisConfig$financialAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisConfig$financialAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalysisConfig model
   */
  interface AnalysisConfigFieldRefs {
    readonly id: FieldRef<"AnalysisConfig", 'String'>
    readonly module: FieldRef<"AnalysisConfig", 'ConfigModule'>
    readonly versionNumber: FieldRef<"AnalysisConfig", 'Int'>
    readonly isActive: FieldRef<"AnalysisConfig", 'Boolean'>
    readonly parameters: FieldRef<"AnalysisConfig", 'Json'>
    readonly note: FieldRef<"AnalysisConfig", 'String'>
    readonly createdById: FieldRef<"AnalysisConfig", 'String'>
    readonly activatedAt: FieldRef<"AnalysisConfig", 'DateTime'>
    readonly createdAt: FieldRef<"AnalysisConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisConfig findUnique
   */
  export type AnalysisConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisConfig to fetch.
     */
    where: AnalysisConfigWhereUniqueInput
  }

  /**
   * AnalysisConfig findUniqueOrThrow
   */
  export type AnalysisConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisConfig to fetch.
     */
    where: AnalysisConfigWhereUniqueInput
  }

  /**
   * AnalysisConfig findFirst
   */
  export type AnalysisConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisConfig to fetch.
     */
    where?: AnalysisConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisConfigs to fetch.
     */
    orderBy?: AnalysisConfigOrderByWithRelationInput | AnalysisConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisConfigs.
     */
    cursor?: AnalysisConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisConfigs.
     */
    distinct?: AnalysisConfigScalarFieldEnum | AnalysisConfigScalarFieldEnum[]
  }

  /**
   * AnalysisConfig findFirstOrThrow
   */
  export type AnalysisConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisConfig to fetch.
     */
    where?: AnalysisConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisConfigs to fetch.
     */
    orderBy?: AnalysisConfigOrderByWithRelationInput | AnalysisConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisConfigs.
     */
    cursor?: AnalysisConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisConfigs.
     */
    distinct?: AnalysisConfigScalarFieldEnum | AnalysisConfigScalarFieldEnum[]
  }

  /**
   * AnalysisConfig findMany
   */
  export type AnalysisConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisConfigs to fetch.
     */
    where?: AnalysisConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisConfigs to fetch.
     */
    orderBy?: AnalysisConfigOrderByWithRelationInput | AnalysisConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisConfigs.
     */
    cursor?: AnalysisConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisConfigs.
     */
    distinct?: AnalysisConfigScalarFieldEnum | AnalysisConfigScalarFieldEnum[]
  }

  /**
   * AnalysisConfig create
   */
  export type AnalysisConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisConfig.
     */
    data: XOR<AnalysisConfigCreateInput, AnalysisConfigUncheckedCreateInput>
  }

  /**
   * AnalysisConfig createMany
   */
  export type AnalysisConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisConfigs.
     */
    data: AnalysisConfigCreateManyInput | AnalysisConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisConfig createManyAndReturn
   */
  export type AnalysisConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisConfigs.
     */
    data: AnalysisConfigCreateManyInput | AnalysisConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisConfig update
   */
  export type AnalysisConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisConfig.
     */
    data: XOR<AnalysisConfigUpdateInput, AnalysisConfigUncheckedUpdateInput>
    /**
     * Choose, which AnalysisConfig to update.
     */
    where: AnalysisConfigWhereUniqueInput
  }

  /**
   * AnalysisConfig updateMany
   */
  export type AnalysisConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisConfigs.
     */
    data: XOR<AnalysisConfigUpdateManyMutationInput, AnalysisConfigUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisConfigs to update
     */
    where?: AnalysisConfigWhereInput
    /**
     * Limit how many AnalysisConfigs to update.
     */
    limit?: number
  }

  /**
   * AnalysisConfig updateManyAndReturn
   */
  export type AnalysisConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisConfigs.
     */
    data: XOR<AnalysisConfigUpdateManyMutationInput, AnalysisConfigUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisConfigs to update
     */
    where?: AnalysisConfigWhereInput
    /**
     * Limit how many AnalysisConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisConfig upsert
   */
  export type AnalysisConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisConfig to update in case it exists.
     */
    where: AnalysisConfigWhereUniqueInput
    /**
     * In case the AnalysisConfig found by the `where` argument doesn't exist, create a new AnalysisConfig with this data.
     */
    create: XOR<AnalysisConfigCreateInput, AnalysisConfigUncheckedCreateInput>
    /**
     * In case the AnalysisConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisConfigUpdateInput, AnalysisConfigUncheckedUpdateInput>
  }

  /**
   * AnalysisConfig delete
   */
  export type AnalysisConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
    /**
     * Filter which AnalysisConfig to delete.
     */
    where: AnalysisConfigWhereUniqueInput
  }

  /**
   * AnalysisConfig deleteMany
   */
  export type AnalysisConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisConfigs to delete
     */
    where?: AnalysisConfigWhereInput
    /**
     * Limit how many AnalysisConfigs to delete.
     */
    limit?: number
  }

  /**
   * AnalysisConfig.createdBy
   */
  export type AnalysisConfig$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AnalysisConfig.locationAnalyses
   */
  export type AnalysisConfig$locationAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    where?: LocationAnalysisWhereInput
    orderBy?: LocationAnalysisOrderByWithRelationInput | LocationAnalysisOrderByWithRelationInput[]
    cursor?: LocationAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationAnalysisScalarFieldEnum | LocationAnalysisScalarFieldEnum[]
  }

  /**
   * AnalysisConfig.financialAnalyses
   */
  export type AnalysisConfig$financialAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    where?: FinancialAnalysisWhereInput
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    cursor?: FinancialAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * AnalysisConfig without action
   */
  export type AnalysisConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisConfig
     */
    select?: AnalysisConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisConfig
     */
    omit?: AnalysisConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisConfigInclude<ExtArgs> | null
  }


  /**
   * Model LocationAnalysis
   */

  export type AggregateLocationAnalysis = {
    _count: LocationAnalysisCountAggregateOutputType | null
    _avg: LocationAnalysisAvgAggregateOutputType | null
    _sum: LocationAnalysisSumAggregateOutputType | null
    _min: LocationAnalysisMinAggregateOutputType | null
    _max: LocationAnalysisMaxAggregateOutputType | null
  }

  export type LocationAnalysisAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    rentCost: Decimal | null
    competitorCount: number | null
    accessibility: number | null
    marketPotential: number | null
    score: Decimal | null
  }

  export type LocationAnalysisSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    rentCost: Decimal | null
    competitorCount: number | null
    accessibility: number | null
    marketPotential: number | null
    score: Decimal | null
  }

  export type LocationAnalysisMinAggregateOutputType = {
    id: string | null
    code: string | null
    userId: string | null
    businessProfileId: string | null
    configId: string | null
    locationName: string | null
    district: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    rentCost: Decimal | null
    competitorCount: number | null
    accessibility: number | null
    marketPotential: number | null
    score: Decimal | null
    category: $Enums.LocationCategory | null
    strongestFactor: string | null
    weakestFactor: string | null
    createdAt: Date | null
  }

  export type LocationAnalysisMaxAggregateOutputType = {
    id: string | null
    code: string | null
    userId: string | null
    businessProfileId: string | null
    configId: string | null
    locationName: string | null
    district: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    rentCost: Decimal | null
    competitorCount: number | null
    accessibility: number | null
    marketPotential: number | null
    score: Decimal | null
    category: $Enums.LocationCategory | null
    strongestFactor: string | null
    weakestFactor: string | null
    createdAt: Date | null
  }

  export type LocationAnalysisCountAggregateOutputType = {
    id: number
    code: number
    userId: number
    businessProfileId: number
    configId: number
    locationName: number
    district: number
    latitude: number
    longitude: number
    rentCost: number
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: number
    category: number
    details: number
    strongestFactor: number
    weakestFactor: number
    warnings: number
    createdAt: number
    _all: number
  }


  export type LocationAnalysisAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    rentCost?: true
    competitorCount?: true
    accessibility?: true
    marketPotential?: true
    score?: true
  }

  export type LocationAnalysisSumAggregateInputType = {
    latitude?: true
    longitude?: true
    rentCost?: true
    competitorCount?: true
    accessibility?: true
    marketPotential?: true
    score?: true
  }

  export type LocationAnalysisMinAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    businessProfileId?: true
    configId?: true
    locationName?: true
    district?: true
    latitude?: true
    longitude?: true
    rentCost?: true
    competitorCount?: true
    accessibility?: true
    marketPotential?: true
    score?: true
    category?: true
    strongestFactor?: true
    weakestFactor?: true
    createdAt?: true
  }

  export type LocationAnalysisMaxAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    businessProfileId?: true
    configId?: true
    locationName?: true
    district?: true
    latitude?: true
    longitude?: true
    rentCost?: true
    competitorCount?: true
    accessibility?: true
    marketPotential?: true
    score?: true
    category?: true
    strongestFactor?: true
    weakestFactor?: true
    createdAt?: true
  }

  export type LocationAnalysisCountAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    businessProfileId?: true
    configId?: true
    locationName?: true
    district?: true
    latitude?: true
    longitude?: true
    rentCost?: true
    competitorCount?: true
    accessibility?: true
    marketPotential?: true
    score?: true
    category?: true
    details?: true
    strongestFactor?: true
    weakestFactor?: true
    warnings?: true
    createdAt?: true
    _all?: true
  }

  export type LocationAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationAnalysis to aggregate.
     */
    where?: LocationAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAnalyses to fetch.
     */
    orderBy?: LocationAnalysisOrderByWithRelationInput | LocationAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationAnalyses
    **/
    _count?: true | LocationAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationAnalysisMaxAggregateInputType
  }

  export type GetLocationAnalysisAggregateType<T extends LocationAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationAnalysis[P]>
      : GetScalarType<T[P], AggregateLocationAnalysis[P]>
  }




  export type LocationAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationAnalysisWhereInput
    orderBy?: LocationAnalysisOrderByWithAggregationInput | LocationAnalysisOrderByWithAggregationInput[]
    by: LocationAnalysisScalarFieldEnum[] | LocationAnalysisScalarFieldEnum
    having?: LocationAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationAnalysisCountAggregateInputType | true
    _avg?: LocationAnalysisAvgAggregateInputType
    _sum?: LocationAnalysisSumAggregateInputType
    _min?: LocationAnalysisMinAggregateInputType
    _max?: LocationAnalysisMaxAggregateInputType
  }

  export type LocationAnalysisGroupByOutputType = {
    id: string
    code: string
    userId: string
    businessProfileId: string
    configId: string
    locationName: string
    district: string
    latitude: Decimal
    longitude: Decimal
    rentCost: Decimal
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal
    category: $Enums.LocationCategory
    details: JsonValue
    strongestFactor: string
    weakestFactor: string
    warnings: JsonValue
    createdAt: Date
    _count: LocationAnalysisCountAggregateOutputType | null
    _avg: LocationAnalysisAvgAggregateOutputType | null
    _sum: LocationAnalysisSumAggregateOutputType | null
    _min: LocationAnalysisMinAggregateOutputType | null
    _max: LocationAnalysisMaxAggregateOutputType | null
  }

  type GetLocationAnalysisGroupByPayload<T extends LocationAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], LocationAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type LocationAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    businessProfileId?: boolean
    configId?: boolean
    locationName?: boolean
    district?: boolean
    latitude?: boolean
    longitude?: boolean
    rentCost?: boolean
    competitorCount?: boolean
    accessibility?: boolean
    marketPotential?: boolean
    score?: boolean
    category?: boolean
    details?: boolean
    strongestFactor?: boolean
    weakestFactor?: boolean
    warnings?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationAnalysis"]>

  export type LocationAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    businessProfileId?: boolean
    configId?: boolean
    locationName?: boolean
    district?: boolean
    latitude?: boolean
    longitude?: boolean
    rentCost?: boolean
    competitorCount?: boolean
    accessibility?: boolean
    marketPotential?: boolean
    score?: boolean
    category?: boolean
    details?: boolean
    strongestFactor?: boolean
    weakestFactor?: boolean
    warnings?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationAnalysis"]>

  export type LocationAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    businessProfileId?: boolean
    configId?: boolean
    locationName?: boolean
    district?: boolean
    latitude?: boolean
    longitude?: boolean
    rentCost?: boolean
    competitorCount?: boolean
    accessibility?: boolean
    marketPotential?: boolean
    score?: boolean
    category?: boolean
    details?: boolean
    strongestFactor?: boolean
    weakestFactor?: boolean
    warnings?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationAnalysis"]>

  export type LocationAnalysisSelectScalar = {
    id?: boolean
    code?: boolean
    userId?: boolean
    businessProfileId?: boolean
    configId?: boolean
    locationName?: boolean
    district?: boolean
    latitude?: boolean
    longitude?: boolean
    rentCost?: boolean
    competitorCount?: boolean
    accessibility?: boolean
    marketPotential?: boolean
    score?: boolean
    category?: boolean
    details?: boolean
    strongestFactor?: boolean
    weakestFactor?: boolean
    warnings?: boolean
    createdAt?: boolean
  }

  export type LocationAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "userId" | "businessProfileId" | "configId" | "locationName" | "district" | "latitude" | "longitude" | "rentCost" | "competitorCount" | "accessibility" | "marketPotential" | "score" | "category" | "details" | "strongestFactor" | "weakestFactor" | "warnings" | "createdAt", ExtArgs["result"]["locationAnalysis"]>
  export type LocationAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }
  export type LocationAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }
  export type LocationAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }

  export type $LocationAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationAnalysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      businessProfile: Prisma.$BusinessProfilePayload<ExtArgs>
      config: Prisma.$AnalysisConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      userId: string
      businessProfileId: string
      configId: string
      locationName: string
      district: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      rentCost: Prisma.Decimal
      competitorCount: number
      accessibility: number
      marketPotential: number
      score: Prisma.Decimal
      category: $Enums.LocationCategory
      details: Prisma.JsonValue
      strongestFactor: string
      weakestFactor: string
      warnings: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["locationAnalysis"]>
    composites: {}
  }

  type LocationAnalysisGetPayload<S extends boolean | null | undefined | LocationAnalysisDefaultArgs> = $Result.GetResult<Prisma.$LocationAnalysisPayload, S>

  type LocationAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationAnalysisCountAggregateInputType | true
    }

  export interface LocationAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationAnalysis'], meta: { name: 'LocationAnalysis' } }
    /**
     * Find zero or one LocationAnalysis that matches the filter.
     * @param {LocationAnalysisFindUniqueArgs} args - Arguments to find a LocationAnalysis
     * @example
     * // Get one LocationAnalysis
     * const locationAnalysis = await prisma.locationAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationAnalysisFindUniqueArgs>(args: SelectSubset<T, LocationAnalysisFindUniqueArgs<ExtArgs>>): Prisma__LocationAnalysisClient<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocationAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationAnalysisFindUniqueOrThrowArgs} args - Arguments to find a LocationAnalysis
     * @example
     * // Get one LocationAnalysis
     * const locationAnalysis = await prisma.locationAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationAnalysisClient<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAnalysisFindFirstArgs} args - Arguments to find a LocationAnalysis
     * @example
     * // Get one LocationAnalysis
     * const locationAnalysis = await prisma.locationAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationAnalysisFindFirstArgs>(args?: SelectSubset<T, LocationAnalysisFindFirstArgs<ExtArgs>>): Prisma__LocationAnalysisClient<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAnalysisFindFirstOrThrowArgs} args - Arguments to find a LocationAnalysis
     * @example
     * // Get one LocationAnalysis
     * const locationAnalysis = await prisma.locationAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationAnalysisClient<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocationAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationAnalyses
     * const locationAnalyses = await prisma.locationAnalysis.findMany()
     * 
     * // Get first 10 LocationAnalyses
     * const locationAnalyses = await prisma.locationAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationAnalysisWithIdOnly = await prisma.locationAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationAnalysisFindManyArgs>(args?: SelectSubset<T, LocationAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocationAnalysis.
     * @param {LocationAnalysisCreateArgs} args - Arguments to create a LocationAnalysis.
     * @example
     * // Create one LocationAnalysis
     * const LocationAnalysis = await prisma.locationAnalysis.create({
     *   data: {
     *     // ... data to create a LocationAnalysis
     *   }
     * })
     * 
     */
    create<T extends LocationAnalysisCreateArgs>(args: SelectSubset<T, LocationAnalysisCreateArgs<ExtArgs>>): Prisma__LocationAnalysisClient<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocationAnalyses.
     * @param {LocationAnalysisCreateManyArgs} args - Arguments to create many LocationAnalyses.
     * @example
     * // Create many LocationAnalyses
     * const locationAnalysis = await prisma.locationAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationAnalysisCreateManyArgs>(args?: SelectSubset<T, LocationAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocationAnalyses and returns the data saved in the database.
     * @param {LocationAnalysisCreateManyAndReturnArgs} args - Arguments to create many LocationAnalyses.
     * @example
     * // Create many LocationAnalyses
     * const locationAnalysis = await prisma.locationAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocationAnalyses and only return the `id`
     * const locationAnalysisWithIdOnly = await prisma.locationAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocationAnalysis.
     * @param {LocationAnalysisDeleteArgs} args - Arguments to delete one LocationAnalysis.
     * @example
     * // Delete one LocationAnalysis
     * const LocationAnalysis = await prisma.locationAnalysis.delete({
     *   where: {
     *     // ... filter to delete one LocationAnalysis
     *   }
     * })
     * 
     */
    delete<T extends LocationAnalysisDeleteArgs>(args: SelectSubset<T, LocationAnalysisDeleteArgs<ExtArgs>>): Prisma__LocationAnalysisClient<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocationAnalysis.
     * @param {LocationAnalysisUpdateArgs} args - Arguments to update one LocationAnalysis.
     * @example
     * // Update one LocationAnalysis
     * const locationAnalysis = await prisma.locationAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationAnalysisUpdateArgs>(args: SelectSubset<T, LocationAnalysisUpdateArgs<ExtArgs>>): Prisma__LocationAnalysisClient<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocationAnalyses.
     * @param {LocationAnalysisDeleteManyArgs} args - Arguments to filter LocationAnalyses to delete.
     * @example
     * // Delete a few LocationAnalyses
     * const { count } = await prisma.locationAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationAnalysisDeleteManyArgs>(args?: SelectSubset<T, LocationAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationAnalyses
     * const locationAnalysis = await prisma.locationAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationAnalysisUpdateManyArgs>(args: SelectSubset<T, LocationAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationAnalyses and returns the data updated in the database.
     * @param {LocationAnalysisUpdateManyAndReturnArgs} args - Arguments to update many LocationAnalyses.
     * @example
     * // Update many LocationAnalyses
     * const locationAnalysis = await prisma.locationAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocationAnalyses and only return the `id`
     * const locationAnalysisWithIdOnly = await prisma.locationAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocationAnalysis.
     * @param {LocationAnalysisUpsertArgs} args - Arguments to update or create a LocationAnalysis.
     * @example
     * // Update or create a LocationAnalysis
     * const locationAnalysis = await prisma.locationAnalysis.upsert({
     *   create: {
     *     // ... data to create a LocationAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends LocationAnalysisUpsertArgs>(args: SelectSubset<T, LocationAnalysisUpsertArgs<ExtArgs>>): Prisma__LocationAnalysisClient<$Result.GetResult<Prisma.$LocationAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocationAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAnalysisCountArgs} args - Arguments to filter LocationAnalyses to count.
     * @example
     * // Count the number of LocationAnalyses
     * const count = await prisma.locationAnalysis.count({
     *   where: {
     *     // ... the filter for the LocationAnalyses we want to count
     *   }
     * })
    **/
    count<T extends LocationAnalysisCountArgs>(
      args?: Subset<T, LocationAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAnalysisAggregateArgs>(args: Subset<T, LocationAnalysisAggregateArgs>): Prisma.PrismaPromise<GetLocationAnalysisAggregateType<T>>

    /**
     * Group by LocationAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAnalysisGroupByArgs} args - Group by arguments.
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
      T extends LocationAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: LocationAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationAnalysis model
   */
  readonly fields: LocationAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    businessProfile<T extends BusinessProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessProfileDefaultArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    config<T extends AnalysisConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisConfigDefaultArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LocationAnalysis model
   */
  interface LocationAnalysisFieldRefs {
    readonly id: FieldRef<"LocationAnalysis", 'String'>
    readonly code: FieldRef<"LocationAnalysis", 'String'>
    readonly userId: FieldRef<"LocationAnalysis", 'String'>
    readonly businessProfileId: FieldRef<"LocationAnalysis", 'String'>
    readonly configId: FieldRef<"LocationAnalysis", 'String'>
    readonly locationName: FieldRef<"LocationAnalysis", 'String'>
    readonly district: FieldRef<"LocationAnalysis", 'String'>
    readonly latitude: FieldRef<"LocationAnalysis", 'Decimal'>
    readonly longitude: FieldRef<"LocationAnalysis", 'Decimal'>
    readonly rentCost: FieldRef<"LocationAnalysis", 'Decimal'>
    readonly competitorCount: FieldRef<"LocationAnalysis", 'Int'>
    readonly accessibility: FieldRef<"LocationAnalysis", 'Int'>
    readonly marketPotential: FieldRef<"LocationAnalysis", 'Int'>
    readonly score: FieldRef<"LocationAnalysis", 'Decimal'>
    readonly category: FieldRef<"LocationAnalysis", 'LocationCategory'>
    readonly details: FieldRef<"LocationAnalysis", 'Json'>
    readonly strongestFactor: FieldRef<"LocationAnalysis", 'String'>
    readonly weakestFactor: FieldRef<"LocationAnalysis", 'String'>
    readonly warnings: FieldRef<"LocationAnalysis", 'Json'>
    readonly createdAt: FieldRef<"LocationAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LocationAnalysis findUnique
   */
  export type LocationAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which LocationAnalysis to fetch.
     */
    where: LocationAnalysisWhereUniqueInput
  }

  /**
   * LocationAnalysis findUniqueOrThrow
   */
  export type LocationAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which LocationAnalysis to fetch.
     */
    where: LocationAnalysisWhereUniqueInput
  }

  /**
   * LocationAnalysis findFirst
   */
  export type LocationAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which LocationAnalysis to fetch.
     */
    where?: LocationAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAnalyses to fetch.
     */
    orderBy?: LocationAnalysisOrderByWithRelationInput | LocationAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationAnalyses.
     */
    cursor?: LocationAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationAnalyses.
     */
    distinct?: LocationAnalysisScalarFieldEnum | LocationAnalysisScalarFieldEnum[]
  }

  /**
   * LocationAnalysis findFirstOrThrow
   */
  export type LocationAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which LocationAnalysis to fetch.
     */
    where?: LocationAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAnalyses to fetch.
     */
    orderBy?: LocationAnalysisOrderByWithRelationInput | LocationAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationAnalyses.
     */
    cursor?: LocationAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationAnalyses.
     */
    distinct?: LocationAnalysisScalarFieldEnum | LocationAnalysisScalarFieldEnum[]
  }

  /**
   * LocationAnalysis findMany
   */
  export type LocationAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which LocationAnalyses to fetch.
     */
    where?: LocationAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAnalyses to fetch.
     */
    orderBy?: LocationAnalysisOrderByWithRelationInput | LocationAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationAnalyses.
     */
    cursor?: LocationAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationAnalyses.
     */
    distinct?: LocationAnalysisScalarFieldEnum | LocationAnalysisScalarFieldEnum[]
  }

  /**
   * LocationAnalysis create
   */
  export type LocationAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a LocationAnalysis.
     */
    data: XOR<LocationAnalysisCreateInput, LocationAnalysisUncheckedCreateInput>
  }

  /**
   * LocationAnalysis createMany
   */
  export type LocationAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationAnalyses.
     */
    data: LocationAnalysisCreateManyInput | LocationAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocationAnalysis createManyAndReturn
   */
  export type LocationAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many LocationAnalyses.
     */
    data: LocationAnalysisCreateManyInput | LocationAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationAnalysis update
   */
  export type LocationAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a LocationAnalysis.
     */
    data: XOR<LocationAnalysisUpdateInput, LocationAnalysisUncheckedUpdateInput>
    /**
     * Choose, which LocationAnalysis to update.
     */
    where: LocationAnalysisWhereUniqueInput
  }

  /**
   * LocationAnalysis updateMany
   */
  export type LocationAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationAnalyses.
     */
    data: XOR<LocationAnalysisUpdateManyMutationInput, LocationAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which LocationAnalyses to update
     */
    where?: LocationAnalysisWhereInput
    /**
     * Limit how many LocationAnalyses to update.
     */
    limit?: number
  }

  /**
   * LocationAnalysis updateManyAndReturn
   */
  export type LocationAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update LocationAnalyses.
     */
    data: XOR<LocationAnalysisUpdateManyMutationInput, LocationAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which LocationAnalyses to update
     */
    where?: LocationAnalysisWhereInput
    /**
     * Limit how many LocationAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationAnalysis upsert
   */
  export type LocationAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the LocationAnalysis to update in case it exists.
     */
    where: LocationAnalysisWhereUniqueInput
    /**
     * In case the LocationAnalysis found by the `where` argument doesn't exist, create a new LocationAnalysis with this data.
     */
    create: XOR<LocationAnalysisCreateInput, LocationAnalysisUncheckedCreateInput>
    /**
     * In case the LocationAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationAnalysisUpdateInput, LocationAnalysisUncheckedUpdateInput>
  }

  /**
   * LocationAnalysis delete
   */
  export type LocationAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
    /**
     * Filter which LocationAnalysis to delete.
     */
    where: LocationAnalysisWhereUniqueInput
  }

  /**
   * LocationAnalysis deleteMany
   */
  export type LocationAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationAnalyses to delete
     */
    where?: LocationAnalysisWhereInput
    /**
     * Limit how many LocationAnalyses to delete.
     */
    limit?: number
  }

  /**
   * LocationAnalysis without action
   */
  export type LocationAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAnalysis
     */
    select?: LocationAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAnalysis
     */
    omit?: LocationAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model FinancialAnalysis
   */

  export type AggregateFinancialAnalysis = {
    _count: FinancialAnalysisCountAggregateOutputType | null
    _avg: FinancialAnalysisAvgAggregateOutputType | null
    _sum: FinancialAnalysisSumAggregateOutputType | null
    _min: FinancialAnalysisMinAggregateOutputType | null
    _max: FinancialAnalysisMaxAggregateOutputType | null
  }

  export type FinancialAnalysisAvgAggregateOutputType = {
    periodsAnalyzed: number | null
    riskIndex: Decimal | null
  }

  export type FinancialAnalysisSumAggregateOutputType = {
    periodsAnalyzed: number | null
    riskIndex: Decimal | null
  }

  export type FinancialAnalysisMinAggregateOutputType = {
    id: string | null
    code: string | null
    userId: string | null
    businessProfileId: string | null
    configId: string | null
    fileName: string | null
    periodStart: Date | null
    periodEnd: Date | null
    periodsAnalyzed: number | null
    riskIndex: Decimal | null
    riskLevel: $Enums.RiskLevel | null
    createdAt: Date | null
  }

  export type FinancialAnalysisMaxAggregateOutputType = {
    id: string | null
    code: string | null
    userId: string | null
    businessProfileId: string | null
    configId: string | null
    fileName: string | null
    periodStart: Date | null
    periodEnd: Date | null
    periodsAnalyzed: number | null
    riskIndex: Decimal | null
    riskLevel: $Enums.RiskLevel | null
    createdAt: Date | null
  }

  export type FinancialAnalysisCountAggregateOutputType = {
    id: number
    code: number
    userId: number
    businessProfileId: number
    configId: number
    fileName: number
    periodStart: number
    periodEnd: number
    periodsAnalyzed: number
    ratios: number
    ruleResults: number
    patterns: number
    excludedRules: number
    warnings: number
    riskIndex: number
    riskLevel: number
    createdAt: number
    _all: number
  }


  export type FinancialAnalysisAvgAggregateInputType = {
    periodsAnalyzed?: true
    riskIndex?: true
  }

  export type FinancialAnalysisSumAggregateInputType = {
    periodsAnalyzed?: true
    riskIndex?: true
  }

  export type FinancialAnalysisMinAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    businessProfileId?: true
    configId?: true
    fileName?: true
    periodStart?: true
    periodEnd?: true
    periodsAnalyzed?: true
    riskIndex?: true
    riskLevel?: true
    createdAt?: true
  }

  export type FinancialAnalysisMaxAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    businessProfileId?: true
    configId?: true
    fileName?: true
    periodStart?: true
    periodEnd?: true
    periodsAnalyzed?: true
    riskIndex?: true
    riskLevel?: true
    createdAt?: true
  }

  export type FinancialAnalysisCountAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    businessProfileId?: true
    configId?: true
    fileName?: true
    periodStart?: true
    periodEnd?: true
    periodsAnalyzed?: true
    ratios?: true
    ruleResults?: true
    patterns?: true
    excludedRules?: true
    warnings?: true
    riskIndex?: true
    riskLevel?: true
    createdAt?: true
    _all?: true
  }

  export type FinancialAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialAnalysis to aggregate.
     */
    where?: FinancialAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialAnalyses to fetch.
     */
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialAnalyses
    **/
    _count?: true | FinancialAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialAnalysisMaxAggregateInputType
  }

  export type GetFinancialAnalysisAggregateType<T extends FinancialAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialAnalysis[P]>
      : GetScalarType<T[P], AggregateFinancialAnalysis[P]>
  }




  export type FinancialAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialAnalysisWhereInput
    orderBy?: FinancialAnalysisOrderByWithAggregationInput | FinancialAnalysisOrderByWithAggregationInput[]
    by: FinancialAnalysisScalarFieldEnum[] | FinancialAnalysisScalarFieldEnum
    having?: FinancialAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialAnalysisCountAggregateInputType | true
    _avg?: FinancialAnalysisAvgAggregateInputType
    _sum?: FinancialAnalysisSumAggregateInputType
    _min?: FinancialAnalysisMinAggregateInputType
    _max?: FinancialAnalysisMaxAggregateInputType
  }

  export type FinancialAnalysisGroupByOutputType = {
    id: string
    code: string
    userId: string
    businessProfileId: string
    configId: string
    fileName: string
    periodStart: Date
    periodEnd: Date
    periodsAnalyzed: number
    ratios: JsonValue
    ruleResults: JsonValue
    patterns: JsonValue
    excludedRules: JsonValue
    warnings: JsonValue
    riskIndex: Decimal
    riskLevel: $Enums.RiskLevel
    createdAt: Date
    _count: FinancialAnalysisCountAggregateOutputType | null
    _avg: FinancialAnalysisAvgAggregateOutputType | null
    _sum: FinancialAnalysisSumAggregateOutputType | null
    _min: FinancialAnalysisMinAggregateOutputType | null
    _max: FinancialAnalysisMaxAggregateOutputType | null
  }

  type GetFinancialAnalysisGroupByPayload<T extends FinancialAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type FinancialAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    businessProfileId?: boolean
    configId?: boolean
    fileName?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    periodsAnalyzed?: boolean
    ratios?: boolean
    ruleResults?: boolean
    patterns?: boolean
    excludedRules?: boolean
    warnings?: boolean
    riskIndex?: boolean
    riskLevel?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
    periods?: boolean | FinancialAnalysis$periodsArgs<ExtArgs>
    _count?: boolean | FinancialAnalysisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialAnalysis"]>

  export type FinancialAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    businessProfileId?: boolean
    configId?: boolean
    fileName?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    periodsAnalyzed?: boolean
    ratios?: boolean
    ruleResults?: boolean
    patterns?: boolean
    excludedRules?: boolean
    warnings?: boolean
    riskIndex?: boolean
    riskLevel?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialAnalysis"]>

  export type FinancialAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    businessProfileId?: boolean
    configId?: boolean
    fileName?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    periodsAnalyzed?: boolean
    ratios?: boolean
    ruleResults?: boolean
    patterns?: boolean
    excludedRules?: boolean
    warnings?: boolean
    riskIndex?: boolean
    riskLevel?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialAnalysis"]>

  export type FinancialAnalysisSelectScalar = {
    id?: boolean
    code?: boolean
    userId?: boolean
    businessProfileId?: boolean
    configId?: boolean
    fileName?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    periodsAnalyzed?: boolean
    ratios?: boolean
    ruleResults?: boolean
    patterns?: boolean
    excludedRules?: boolean
    warnings?: boolean
    riskIndex?: boolean
    riskLevel?: boolean
    createdAt?: boolean
  }

  export type FinancialAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "userId" | "businessProfileId" | "configId" | "fileName" | "periodStart" | "periodEnd" | "periodsAnalyzed" | "ratios" | "ruleResults" | "patterns" | "excludedRules" | "warnings" | "riskIndex" | "riskLevel" | "createdAt", ExtArgs["result"]["financialAnalysis"]>
  export type FinancialAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
    periods?: boolean | FinancialAnalysis$periodsArgs<ExtArgs>
    _count?: boolean | FinancialAnalysisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FinancialAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }
  export type FinancialAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    config?: boolean | AnalysisConfigDefaultArgs<ExtArgs>
  }

  export type $FinancialAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialAnalysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      businessProfile: Prisma.$BusinessProfilePayload<ExtArgs>
      config: Prisma.$AnalysisConfigPayload<ExtArgs>
      periods: Prisma.$FinancialPeriodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      userId: string
      businessProfileId: string
      configId: string
      fileName: string
      periodStart: Date
      periodEnd: Date
      periodsAnalyzed: number
      ratios: Prisma.JsonValue
      ruleResults: Prisma.JsonValue
      patterns: Prisma.JsonValue
      excludedRules: Prisma.JsonValue
      warnings: Prisma.JsonValue
      riskIndex: Prisma.Decimal
      riskLevel: $Enums.RiskLevel
      createdAt: Date
    }, ExtArgs["result"]["financialAnalysis"]>
    composites: {}
  }

  type FinancialAnalysisGetPayload<S extends boolean | null | undefined | FinancialAnalysisDefaultArgs> = $Result.GetResult<Prisma.$FinancialAnalysisPayload, S>

  type FinancialAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialAnalysisCountAggregateInputType | true
    }

  export interface FinancialAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialAnalysis'], meta: { name: 'FinancialAnalysis' } }
    /**
     * Find zero or one FinancialAnalysis that matches the filter.
     * @param {FinancialAnalysisFindUniqueArgs} args - Arguments to find a FinancialAnalysis
     * @example
     * // Get one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialAnalysisFindUniqueArgs>(args: SelectSubset<T, FinancialAnalysisFindUniqueArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialAnalysisFindUniqueOrThrowArgs} args - Arguments to find a FinancialAnalysis
     * @example
     * // Get one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisFindFirstArgs} args - Arguments to find a FinancialAnalysis
     * @example
     * // Get one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialAnalysisFindFirstArgs>(args?: SelectSubset<T, FinancialAnalysisFindFirstArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisFindFirstOrThrowArgs} args - Arguments to find a FinancialAnalysis
     * @example
     * // Get one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialAnalyses
     * const financialAnalyses = await prisma.financialAnalysis.findMany()
     * 
     * // Get first 10 FinancialAnalyses
     * const financialAnalyses = await prisma.financialAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialAnalysisWithIdOnly = await prisma.financialAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialAnalysisFindManyArgs>(args?: SelectSubset<T, FinancialAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialAnalysis.
     * @param {FinancialAnalysisCreateArgs} args - Arguments to create a FinancialAnalysis.
     * @example
     * // Create one FinancialAnalysis
     * const FinancialAnalysis = await prisma.financialAnalysis.create({
     *   data: {
     *     // ... data to create a FinancialAnalysis
     *   }
     * })
     * 
     */
    create<T extends FinancialAnalysisCreateArgs>(args: SelectSubset<T, FinancialAnalysisCreateArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialAnalyses.
     * @param {FinancialAnalysisCreateManyArgs} args - Arguments to create many FinancialAnalyses.
     * @example
     * // Create many FinancialAnalyses
     * const financialAnalysis = await prisma.financialAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialAnalysisCreateManyArgs>(args?: SelectSubset<T, FinancialAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialAnalyses and returns the data saved in the database.
     * @param {FinancialAnalysisCreateManyAndReturnArgs} args - Arguments to create many FinancialAnalyses.
     * @example
     * // Create many FinancialAnalyses
     * const financialAnalysis = await prisma.financialAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialAnalyses and only return the `id`
     * const financialAnalysisWithIdOnly = await prisma.financialAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialAnalysis.
     * @param {FinancialAnalysisDeleteArgs} args - Arguments to delete one FinancialAnalysis.
     * @example
     * // Delete one FinancialAnalysis
     * const FinancialAnalysis = await prisma.financialAnalysis.delete({
     *   where: {
     *     // ... filter to delete one FinancialAnalysis
     *   }
     * })
     * 
     */
    delete<T extends FinancialAnalysisDeleteArgs>(args: SelectSubset<T, FinancialAnalysisDeleteArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialAnalysis.
     * @param {FinancialAnalysisUpdateArgs} args - Arguments to update one FinancialAnalysis.
     * @example
     * // Update one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialAnalysisUpdateArgs>(args: SelectSubset<T, FinancialAnalysisUpdateArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialAnalyses.
     * @param {FinancialAnalysisDeleteManyArgs} args - Arguments to filter FinancialAnalyses to delete.
     * @example
     * // Delete a few FinancialAnalyses
     * const { count } = await prisma.financialAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialAnalysisDeleteManyArgs>(args?: SelectSubset<T, FinancialAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialAnalyses
     * const financialAnalysis = await prisma.financialAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialAnalysisUpdateManyArgs>(args: SelectSubset<T, FinancialAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialAnalyses and returns the data updated in the database.
     * @param {FinancialAnalysisUpdateManyAndReturnArgs} args - Arguments to update many FinancialAnalyses.
     * @example
     * // Update many FinancialAnalyses
     * const financialAnalysis = await prisma.financialAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialAnalyses and only return the `id`
     * const financialAnalysisWithIdOnly = await prisma.financialAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinancialAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialAnalysis.
     * @param {FinancialAnalysisUpsertArgs} args - Arguments to update or create a FinancialAnalysis.
     * @example
     * // Update or create a FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.upsert({
     *   create: {
     *     // ... data to create a FinancialAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends FinancialAnalysisUpsertArgs>(args: SelectSubset<T, FinancialAnalysisUpsertArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisCountArgs} args - Arguments to filter FinancialAnalyses to count.
     * @example
     * // Count the number of FinancialAnalyses
     * const count = await prisma.financialAnalysis.count({
     *   where: {
     *     // ... the filter for the FinancialAnalyses we want to count
     *   }
     * })
    **/
    count<T extends FinancialAnalysisCountArgs>(
      args?: Subset<T, FinancialAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialAnalysisAggregateArgs>(args: Subset<T, FinancialAnalysisAggregateArgs>): Prisma.PrismaPromise<GetFinancialAnalysisAggregateType<T>>

    /**
     * Group by FinancialAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisGroupByArgs} args - Group by arguments.
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
      T extends FinancialAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: FinancialAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialAnalysis model
   */
  readonly fields: FinancialAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    businessProfile<T extends BusinessProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessProfileDefaultArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    config<T extends AnalysisConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisConfigDefaultArgs<ExtArgs>>): Prisma__AnalysisConfigClient<$Result.GetResult<Prisma.$AnalysisConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periods<T extends FinancialAnalysis$periodsArgs<ExtArgs> = {}>(args?: Subset<T, FinancialAnalysis$periodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinancialAnalysis model
   */
  interface FinancialAnalysisFieldRefs {
    readonly id: FieldRef<"FinancialAnalysis", 'String'>
    readonly code: FieldRef<"FinancialAnalysis", 'String'>
    readonly userId: FieldRef<"FinancialAnalysis", 'String'>
    readonly businessProfileId: FieldRef<"FinancialAnalysis", 'String'>
    readonly configId: FieldRef<"FinancialAnalysis", 'String'>
    readonly fileName: FieldRef<"FinancialAnalysis", 'String'>
    readonly periodStart: FieldRef<"FinancialAnalysis", 'DateTime'>
    readonly periodEnd: FieldRef<"FinancialAnalysis", 'DateTime'>
    readonly periodsAnalyzed: FieldRef<"FinancialAnalysis", 'Int'>
    readonly ratios: FieldRef<"FinancialAnalysis", 'Json'>
    readonly ruleResults: FieldRef<"FinancialAnalysis", 'Json'>
    readonly patterns: FieldRef<"FinancialAnalysis", 'Json'>
    readonly excludedRules: FieldRef<"FinancialAnalysis", 'Json'>
    readonly warnings: FieldRef<"FinancialAnalysis", 'Json'>
    readonly riskIndex: FieldRef<"FinancialAnalysis", 'Decimal'>
    readonly riskLevel: FieldRef<"FinancialAnalysis", 'RiskLevel'>
    readonly createdAt: FieldRef<"FinancialAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialAnalysis findUnique
   */
  export type FinancialAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalysis to fetch.
     */
    where: FinancialAnalysisWhereUniqueInput
  }

  /**
   * FinancialAnalysis findUniqueOrThrow
   */
  export type FinancialAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalysis to fetch.
     */
    where: FinancialAnalysisWhereUniqueInput
  }

  /**
   * FinancialAnalysis findFirst
   */
  export type FinancialAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalysis to fetch.
     */
    where?: FinancialAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialAnalyses to fetch.
     */
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialAnalyses.
     */
    cursor?: FinancialAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialAnalyses.
     */
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * FinancialAnalysis findFirstOrThrow
   */
  export type FinancialAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalysis to fetch.
     */
    where?: FinancialAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialAnalyses to fetch.
     */
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialAnalyses.
     */
    cursor?: FinancialAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialAnalyses.
     */
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * FinancialAnalysis findMany
   */
  export type FinancialAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalyses to fetch.
     */
    where?: FinancialAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialAnalyses to fetch.
     */
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialAnalyses.
     */
    cursor?: FinancialAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialAnalyses.
     */
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * FinancialAnalysis create
   */
  export type FinancialAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialAnalysis.
     */
    data: XOR<FinancialAnalysisCreateInput, FinancialAnalysisUncheckedCreateInput>
  }

  /**
   * FinancialAnalysis createMany
   */
  export type FinancialAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialAnalyses.
     */
    data: FinancialAnalysisCreateManyInput | FinancialAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialAnalysis createManyAndReturn
   */
  export type FinancialAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialAnalyses.
     */
    data: FinancialAnalysisCreateManyInput | FinancialAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialAnalysis update
   */
  export type FinancialAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialAnalysis.
     */
    data: XOR<FinancialAnalysisUpdateInput, FinancialAnalysisUncheckedUpdateInput>
    /**
     * Choose, which FinancialAnalysis to update.
     */
    where: FinancialAnalysisWhereUniqueInput
  }

  /**
   * FinancialAnalysis updateMany
   */
  export type FinancialAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialAnalyses.
     */
    data: XOR<FinancialAnalysisUpdateManyMutationInput, FinancialAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which FinancialAnalyses to update
     */
    where?: FinancialAnalysisWhereInput
    /**
     * Limit how many FinancialAnalyses to update.
     */
    limit?: number
  }

  /**
   * FinancialAnalysis updateManyAndReturn
   */
  export type FinancialAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update FinancialAnalyses.
     */
    data: XOR<FinancialAnalysisUpdateManyMutationInput, FinancialAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which FinancialAnalyses to update
     */
    where?: FinancialAnalysisWhereInput
    /**
     * Limit how many FinancialAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialAnalysis upsert
   */
  export type FinancialAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialAnalysis to update in case it exists.
     */
    where: FinancialAnalysisWhereUniqueInput
    /**
     * In case the FinancialAnalysis found by the `where` argument doesn't exist, create a new FinancialAnalysis with this data.
     */
    create: XOR<FinancialAnalysisCreateInput, FinancialAnalysisUncheckedCreateInput>
    /**
     * In case the FinancialAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialAnalysisUpdateInput, FinancialAnalysisUncheckedUpdateInput>
  }

  /**
   * FinancialAnalysis delete
   */
  export type FinancialAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter which FinancialAnalysis to delete.
     */
    where: FinancialAnalysisWhereUniqueInput
  }

  /**
   * FinancialAnalysis deleteMany
   */
  export type FinancialAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialAnalyses to delete
     */
    where?: FinancialAnalysisWhereInput
    /**
     * Limit how many FinancialAnalyses to delete.
     */
    limit?: number
  }

  /**
   * FinancialAnalysis.periods
   */
  export type FinancialAnalysis$periodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    where?: FinancialPeriodWhereInput
    orderBy?: FinancialPeriodOrderByWithRelationInput | FinancialPeriodOrderByWithRelationInput[]
    cursor?: FinancialPeriodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialPeriodScalarFieldEnum | FinancialPeriodScalarFieldEnum[]
  }

  /**
   * FinancialAnalysis without action
   */
  export type FinancialAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model FinancialPeriod
   */

  export type AggregateFinancialPeriod = {
    _count: FinancialPeriodCountAggregateOutputType | null
    _avg: FinancialPeriodAvgAggregateOutputType | null
    _sum: FinancialPeriodSumAggregateOutputType | null
    _min: FinancialPeriodMinAggregateOutputType | null
    _max: FinancialPeriodMaxAggregateOutputType | null
  }

  export type FinancialPeriodAvgAggregateOutputType = {
    revenue: Decimal | null
    cogs: Decimal | null
    operatingExpense: Decimal | null
    netIncome: Decimal | null
    currentAssets: Decimal | null
    inventory: Decimal | null
    totalAssets: Decimal | null
    currentLiabilities: Decimal | null
    totalLiabilities: Decimal | null
    equity: Decimal | null
  }

  export type FinancialPeriodSumAggregateOutputType = {
    revenue: Decimal | null
    cogs: Decimal | null
    operatingExpense: Decimal | null
    netIncome: Decimal | null
    currentAssets: Decimal | null
    inventory: Decimal | null
    totalAssets: Decimal | null
    currentLiabilities: Decimal | null
    totalLiabilities: Decimal | null
    equity: Decimal | null
  }

  export type FinancialPeriodMinAggregateOutputType = {
    id: string | null
    userId: string | null
    businessProfileId: string | null
    periodStart: Date | null
    revenue: Decimal | null
    cogs: Decimal | null
    operatingExpense: Decimal | null
    netIncome: Decimal | null
    currentAssets: Decimal | null
    inventory: Decimal | null
    totalAssets: Decimal | null
    currentLiabilities: Decimal | null
    totalLiabilities: Decimal | null
    equity: Decimal | null
    sourceAnalysisId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialPeriodMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    businessProfileId: string | null
    periodStart: Date | null
    revenue: Decimal | null
    cogs: Decimal | null
    operatingExpense: Decimal | null
    netIncome: Decimal | null
    currentAssets: Decimal | null
    inventory: Decimal | null
    totalAssets: Decimal | null
    currentLiabilities: Decimal | null
    totalLiabilities: Decimal | null
    equity: Decimal | null
    sourceAnalysisId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialPeriodCountAggregateOutputType = {
    id: number
    userId: number
    businessProfileId: number
    periodStart: number
    revenue: number
    cogs: number
    operatingExpense: number
    netIncome: number
    currentAssets: number
    inventory: number
    totalAssets: number
    currentLiabilities: number
    totalLiabilities: number
    equity: number
    sourceAnalysisId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinancialPeriodAvgAggregateInputType = {
    revenue?: true
    cogs?: true
    operatingExpense?: true
    netIncome?: true
    currentAssets?: true
    inventory?: true
    totalAssets?: true
    currentLiabilities?: true
    totalLiabilities?: true
    equity?: true
  }

  export type FinancialPeriodSumAggregateInputType = {
    revenue?: true
    cogs?: true
    operatingExpense?: true
    netIncome?: true
    currentAssets?: true
    inventory?: true
    totalAssets?: true
    currentLiabilities?: true
    totalLiabilities?: true
    equity?: true
  }

  export type FinancialPeriodMinAggregateInputType = {
    id?: true
    userId?: true
    businessProfileId?: true
    periodStart?: true
    revenue?: true
    cogs?: true
    operatingExpense?: true
    netIncome?: true
    currentAssets?: true
    inventory?: true
    totalAssets?: true
    currentLiabilities?: true
    totalLiabilities?: true
    equity?: true
    sourceAnalysisId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialPeriodMaxAggregateInputType = {
    id?: true
    userId?: true
    businessProfileId?: true
    periodStart?: true
    revenue?: true
    cogs?: true
    operatingExpense?: true
    netIncome?: true
    currentAssets?: true
    inventory?: true
    totalAssets?: true
    currentLiabilities?: true
    totalLiabilities?: true
    equity?: true
    sourceAnalysisId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialPeriodCountAggregateInputType = {
    id?: true
    userId?: true
    businessProfileId?: true
    periodStart?: true
    revenue?: true
    cogs?: true
    operatingExpense?: true
    netIncome?: true
    currentAssets?: true
    inventory?: true
    totalAssets?: true
    currentLiabilities?: true
    totalLiabilities?: true
    equity?: true
    sourceAnalysisId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinancialPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialPeriod to aggregate.
     */
    where?: FinancialPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialPeriods to fetch.
     */
    orderBy?: FinancialPeriodOrderByWithRelationInput | FinancialPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialPeriods
    **/
    _count?: true | FinancialPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialPeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialPeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialPeriodMaxAggregateInputType
  }

  export type GetFinancialPeriodAggregateType<T extends FinancialPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialPeriod[P]>
      : GetScalarType<T[P], AggregateFinancialPeriod[P]>
  }




  export type FinancialPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialPeriodWhereInput
    orderBy?: FinancialPeriodOrderByWithAggregationInput | FinancialPeriodOrderByWithAggregationInput[]
    by: FinancialPeriodScalarFieldEnum[] | FinancialPeriodScalarFieldEnum
    having?: FinancialPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialPeriodCountAggregateInputType | true
    _avg?: FinancialPeriodAvgAggregateInputType
    _sum?: FinancialPeriodSumAggregateInputType
    _min?: FinancialPeriodMinAggregateInputType
    _max?: FinancialPeriodMaxAggregateInputType
  }

  export type FinancialPeriodGroupByOutputType = {
    id: string
    userId: string
    businessProfileId: string
    periodStart: Date
    revenue: Decimal
    cogs: Decimal
    operatingExpense: Decimal
    netIncome: Decimal
    currentAssets: Decimal
    inventory: Decimal
    totalAssets: Decimal
    currentLiabilities: Decimal
    totalLiabilities: Decimal
    equity: Decimal
    sourceAnalysisId: string
    createdAt: Date
    updatedAt: Date
    _count: FinancialPeriodCountAggregateOutputType | null
    _avg: FinancialPeriodAvgAggregateOutputType | null
    _sum: FinancialPeriodSumAggregateOutputType | null
    _min: FinancialPeriodMinAggregateOutputType | null
    _max: FinancialPeriodMaxAggregateOutputType | null
  }

  type GetFinancialPeriodGroupByPayload<T extends FinancialPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialPeriodGroupByOutputType[P]>
        }
      >
    >


  export type FinancialPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessProfileId?: boolean
    periodStart?: boolean
    revenue?: boolean
    cogs?: boolean
    operatingExpense?: boolean
    netIncome?: boolean
    currentAssets?: boolean
    inventory?: boolean
    totalAssets?: boolean
    currentLiabilities?: boolean
    totalLiabilities?: boolean
    equity?: boolean
    sourceAnalysisId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    sourceAnalysis?: boolean | FinancialAnalysisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialPeriod"]>

  export type FinancialPeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessProfileId?: boolean
    periodStart?: boolean
    revenue?: boolean
    cogs?: boolean
    operatingExpense?: boolean
    netIncome?: boolean
    currentAssets?: boolean
    inventory?: boolean
    totalAssets?: boolean
    currentLiabilities?: boolean
    totalLiabilities?: boolean
    equity?: boolean
    sourceAnalysisId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    sourceAnalysis?: boolean | FinancialAnalysisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialPeriod"]>

  export type FinancialPeriodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessProfileId?: boolean
    periodStart?: boolean
    revenue?: boolean
    cogs?: boolean
    operatingExpense?: boolean
    netIncome?: boolean
    currentAssets?: boolean
    inventory?: boolean
    totalAssets?: boolean
    currentLiabilities?: boolean
    totalLiabilities?: boolean
    equity?: boolean
    sourceAnalysisId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    sourceAnalysis?: boolean | FinancialAnalysisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialPeriod"]>

  export type FinancialPeriodSelectScalar = {
    id?: boolean
    userId?: boolean
    businessProfileId?: boolean
    periodStart?: boolean
    revenue?: boolean
    cogs?: boolean
    operatingExpense?: boolean
    netIncome?: boolean
    currentAssets?: boolean
    inventory?: boolean
    totalAssets?: boolean
    currentLiabilities?: boolean
    totalLiabilities?: boolean
    equity?: boolean
    sourceAnalysisId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinancialPeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "businessProfileId" | "periodStart" | "revenue" | "cogs" | "operatingExpense" | "netIncome" | "currentAssets" | "inventory" | "totalAssets" | "currentLiabilities" | "totalLiabilities" | "equity" | "sourceAnalysisId" | "createdAt" | "updatedAt", ExtArgs["result"]["financialPeriod"]>
  export type FinancialPeriodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    sourceAnalysis?: boolean | FinancialAnalysisDefaultArgs<ExtArgs>
  }
  export type FinancialPeriodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    sourceAnalysis?: boolean | FinancialAnalysisDefaultArgs<ExtArgs>
  }
  export type FinancialPeriodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    businessProfile?: boolean | BusinessProfileDefaultArgs<ExtArgs>
    sourceAnalysis?: boolean | FinancialAnalysisDefaultArgs<ExtArgs>
  }

  export type $FinancialPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialPeriod"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      businessProfile: Prisma.$BusinessProfilePayload<ExtArgs>
      sourceAnalysis: Prisma.$FinancialAnalysisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      businessProfileId: string
      periodStart: Date
      revenue: Prisma.Decimal
      cogs: Prisma.Decimal
      operatingExpense: Prisma.Decimal
      netIncome: Prisma.Decimal
      currentAssets: Prisma.Decimal
      inventory: Prisma.Decimal
      totalAssets: Prisma.Decimal
      currentLiabilities: Prisma.Decimal
      totalLiabilities: Prisma.Decimal
      equity: Prisma.Decimal
      sourceAnalysisId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financialPeriod"]>
    composites: {}
  }

  type FinancialPeriodGetPayload<S extends boolean | null | undefined | FinancialPeriodDefaultArgs> = $Result.GetResult<Prisma.$FinancialPeriodPayload, S>

  type FinancialPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialPeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialPeriodCountAggregateInputType | true
    }

  export interface FinancialPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialPeriod'], meta: { name: 'FinancialPeriod' } }
    /**
     * Find zero or one FinancialPeriod that matches the filter.
     * @param {FinancialPeriodFindUniqueArgs} args - Arguments to find a FinancialPeriod
     * @example
     * // Get one FinancialPeriod
     * const financialPeriod = await prisma.financialPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialPeriodFindUniqueArgs>(args: SelectSubset<T, FinancialPeriodFindUniqueArgs<ExtArgs>>): Prisma__FinancialPeriodClient<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialPeriod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialPeriodFindUniqueOrThrowArgs} args - Arguments to find a FinancialPeriod
     * @example
     * // Get one FinancialPeriod
     * const financialPeriod = await prisma.financialPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialPeriodClient<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialPeriodFindFirstArgs} args - Arguments to find a FinancialPeriod
     * @example
     * // Get one FinancialPeriod
     * const financialPeriod = await prisma.financialPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialPeriodFindFirstArgs>(args?: SelectSubset<T, FinancialPeriodFindFirstArgs<ExtArgs>>): Prisma__FinancialPeriodClient<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialPeriodFindFirstOrThrowArgs} args - Arguments to find a FinancialPeriod
     * @example
     * // Get one FinancialPeriod
     * const financialPeriod = await prisma.financialPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialPeriodClient<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialPeriods
     * const financialPeriods = await prisma.financialPeriod.findMany()
     * 
     * // Get first 10 FinancialPeriods
     * const financialPeriods = await prisma.financialPeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialPeriodWithIdOnly = await prisma.financialPeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialPeriodFindManyArgs>(args?: SelectSubset<T, FinancialPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialPeriod.
     * @param {FinancialPeriodCreateArgs} args - Arguments to create a FinancialPeriod.
     * @example
     * // Create one FinancialPeriod
     * const FinancialPeriod = await prisma.financialPeriod.create({
     *   data: {
     *     // ... data to create a FinancialPeriod
     *   }
     * })
     * 
     */
    create<T extends FinancialPeriodCreateArgs>(args: SelectSubset<T, FinancialPeriodCreateArgs<ExtArgs>>): Prisma__FinancialPeriodClient<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialPeriods.
     * @param {FinancialPeriodCreateManyArgs} args - Arguments to create many FinancialPeriods.
     * @example
     * // Create many FinancialPeriods
     * const financialPeriod = await prisma.financialPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialPeriodCreateManyArgs>(args?: SelectSubset<T, FinancialPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialPeriods and returns the data saved in the database.
     * @param {FinancialPeriodCreateManyAndReturnArgs} args - Arguments to create many FinancialPeriods.
     * @example
     * // Create many FinancialPeriods
     * const financialPeriod = await prisma.financialPeriod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialPeriods and only return the `id`
     * const financialPeriodWithIdOnly = await prisma.financialPeriod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialPeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialPeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialPeriod.
     * @param {FinancialPeriodDeleteArgs} args - Arguments to delete one FinancialPeriod.
     * @example
     * // Delete one FinancialPeriod
     * const FinancialPeriod = await prisma.financialPeriod.delete({
     *   where: {
     *     // ... filter to delete one FinancialPeriod
     *   }
     * })
     * 
     */
    delete<T extends FinancialPeriodDeleteArgs>(args: SelectSubset<T, FinancialPeriodDeleteArgs<ExtArgs>>): Prisma__FinancialPeriodClient<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialPeriod.
     * @param {FinancialPeriodUpdateArgs} args - Arguments to update one FinancialPeriod.
     * @example
     * // Update one FinancialPeriod
     * const financialPeriod = await prisma.financialPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialPeriodUpdateArgs>(args: SelectSubset<T, FinancialPeriodUpdateArgs<ExtArgs>>): Prisma__FinancialPeriodClient<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialPeriods.
     * @param {FinancialPeriodDeleteManyArgs} args - Arguments to filter FinancialPeriods to delete.
     * @example
     * // Delete a few FinancialPeriods
     * const { count } = await prisma.financialPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialPeriodDeleteManyArgs>(args?: SelectSubset<T, FinancialPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialPeriods
     * const financialPeriod = await prisma.financialPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialPeriodUpdateManyArgs>(args: SelectSubset<T, FinancialPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialPeriods and returns the data updated in the database.
     * @param {FinancialPeriodUpdateManyAndReturnArgs} args - Arguments to update many FinancialPeriods.
     * @example
     * // Update many FinancialPeriods
     * const financialPeriod = await prisma.financialPeriod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialPeriods and only return the `id`
     * const financialPeriodWithIdOnly = await prisma.financialPeriod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinancialPeriodUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialPeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialPeriod.
     * @param {FinancialPeriodUpsertArgs} args - Arguments to update or create a FinancialPeriod.
     * @example
     * // Update or create a FinancialPeriod
     * const financialPeriod = await prisma.financialPeriod.upsert({
     *   create: {
     *     // ... data to create a FinancialPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialPeriod we want to update
     *   }
     * })
     */
    upsert<T extends FinancialPeriodUpsertArgs>(args: SelectSubset<T, FinancialPeriodUpsertArgs<ExtArgs>>): Prisma__FinancialPeriodClient<$Result.GetResult<Prisma.$FinancialPeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialPeriodCountArgs} args - Arguments to filter FinancialPeriods to count.
     * @example
     * // Count the number of FinancialPeriods
     * const count = await prisma.financialPeriod.count({
     *   where: {
     *     // ... the filter for the FinancialPeriods we want to count
     *   }
     * })
    **/
    count<T extends FinancialPeriodCountArgs>(
      args?: Subset<T, FinancialPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialPeriodAggregateArgs>(args: Subset<T, FinancialPeriodAggregateArgs>): Prisma.PrismaPromise<GetFinancialPeriodAggregateType<T>>

    /**
     * Group by FinancialPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialPeriodGroupByArgs} args - Group by arguments.
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
      T extends FinancialPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialPeriodGroupByArgs['orderBy'] }
        : { orderBy?: FinancialPeriodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialPeriod model
   */
  readonly fields: FinancialPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    businessProfile<T extends BusinessProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessProfileDefaultArgs<ExtArgs>>): Prisma__BusinessProfileClient<$Result.GetResult<Prisma.$BusinessProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourceAnalysis<T extends FinancialAnalysisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinancialAnalysisDefaultArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinancialPeriod model
   */
  interface FinancialPeriodFieldRefs {
    readonly id: FieldRef<"FinancialPeriod", 'String'>
    readonly userId: FieldRef<"FinancialPeriod", 'String'>
    readonly businessProfileId: FieldRef<"FinancialPeriod", 'String'>
    readonly periodStart: FieldRef<"FinancialPeriod", 'DateTime'>
    readonly revenue: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly cogs: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly operatingExpense: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly netIncome: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly currentAssets: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly inventory: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly totalAssets: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly currentLiabilities: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly totalLiabilities: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly equity: FieldRef<"FinancialPeriod", 'Decimal'>
    readonly sourceAnalysisId: FieldRef<"FinancialPeriod", 'String'>
    readonly createdAt: FieldRef<"FinancialPeriod", 'DateTime'>
    readonly updatedAt: FieldRef<"FinancialPeriod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialPeriod findUnique
   */
  export type FinancialPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    /**
     * Filter, which FinancialPeriod to fetch.
     */
    where: FinancialPeriodWhereUniqueInput
  }

  /**
   * FinancialPeriod findUniqueOrThrow
   */
  export type FinancialPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    /**
     * Filter, which FinancialPeriod to fetch.
     */
    where: FinancialPeriodWhereUniqueInput
  }

  /**
   * FinancialPeriod findFirst
   */
  export type FinancialPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    /**
     * Filter, which FinancialPeriod to fetch.
     */
    where?: FinancialPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialPeriods to fetch.
     */
    orderBy?: FinancialPeriodOrderByWithRelationInput | FinancialPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialPeriods.
     */
    cursor?: FinancialPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialPeriods.
     */
    distinct?: FinancialPeriodScalarFieldEnum | FinancialPeriodScalarFieldEnum[]
  }

  /**
   * FinancialPeriod findFirstOrThrow
   */
  export type FinancialPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    /**
     * Filter, which FinancialPeriod to fetch.
     */
    where?: FinancialPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialPeriods to fetch.
     */
    orderBy?: FinancialPeriodOrderByWithRelationInput | FinancialPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialPeriods.
     */
    cursor?: FinancialPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialPeriods.
     */
    distinct?: FinancialPeriodScalarFieldEnum | FinancialPeriodScalarFieldEnum[]
  }

  /**
   * FinancialPeriod findMany
   */
  export type FinancialPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    /**
     * Filter, which FinancialPeriods to fetch.
     */
    where?: FinancialPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialPeriods to fetch.
     */
    orderBy?: FinancialPeriodOrderByWithRelationInput | FinancialPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialPeriods.
     */
    cursor?: FinancialPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialPeriods.
     */
    distinct?: FinancialPeriodScalarFieldEnum | FinancialPeriodScalarFieldEnum[]
  }

  /**
   * FinancialPeriod create
   */
  export type FinancialPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialPeriod.
     */
    data: XOR<FinancialPeriodCreateInput, FinancialPeriodUncheckedCreateInput>
  }

  /**
   * FinancialPeriod createMany
   */
  export type FinancialPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialPeriods.
     */
    data: FinancialPeriodCreateManyInput | FinancialPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialPeriod createManyAndReturn
   */
  export type FinancialPeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialPeriods.
     */
    data: FinancialPeriodCreateManyInput | FinancialPeriodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialPeriod update
   */
  export type FinancialPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialPeriod.
     */
    data: XOR<FinancialPeriodUpdateInput, FinancialPeriodUncheckedUpdateInput>
    /**
     * Choose, which FinancialPeriod to update.
     */
    where: FinancialPeriodWhereUniqueInput
  }

  /**
   * FinancialPeriod updateMany
   */
  export type FinancialPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialPeriods.
     */
    data: XOR<FinancialPeriodUpdateManyMutationInput, FinancialPeriodUncheckedUpdateManyInput>
    /**
     * Filter which FinancialPeriods to update
     */
    where?: FinancialPeriodWhereInput
    /**
     * Limit how many FinancialPeriods to update.
     */
    limit?: number
  }

  /**
   * FinancialPeriod updateManyAndReturn
   */
  export type FinancialPeriodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * The data used to update FinancialPeriods.
     */
    data: XOR<FinancialPeriodUpdateManyMutationInput, FinancialPeriodUncheckedUpdateManyInput>
    /**
     * Filter which FinancialPeriods to update
     */
    where?: FinancialPeriodWhereInput
    /**
     * Limit how many FinancialPeriods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialPeriod upsert
   */
  export type FinancialPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialPeriod to update in case it exists.
     */
    where: FinancialPeriodWhereUniqueInput
    /**
     * In case the FinancialPeriod found by the `where` argument doesn't exist, create a new FinancialPeriod with this data.
     */
    create: XOR<FinancialPeriodCreateInput, FinancialPeriodUncheckedCreateInput>
    /**
     * In case the FinancialPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialPeriodUpdateInput, FinancialPeriodUncheckedUpdateInput>
  }

  /**
   * FinancialPeriod delete
   */
  export type FinancialPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
    /**
     * Filter which FinancialPeriod to delete.
     */
    where: FinancialPeriodWhereUniqueInput
  }

  /**
   * FinancialPeriod deleteMany
   */
  export type FinancialPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialPeriods to delete
     */
    where?: FinancialPeriodWhereInput
    /**
     * Limit how many FinancialPeriods to delete.
     */
    limit?: number
  }

  /**
   * FinancialPeriod without action
   */
  export type FinancialPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialPeriod
     */
    select?: FinancialPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialPeriod
     */
    omit?: FinancialPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialPeriodInclude<ExtArgs> | null
  }


  /**
   * Model AiConsent
   */

  export type AggregateAiConsent = {
    _count: AiConsentCountAggregateOutputType | null
    _min: AiConsentMinAggregateOutputType | null
    _max: AiConsentMaxAggregateOutputType | null
  }

  export type AiConsentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    allowContext: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiConsentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    allowContext: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AiConsentCountAggregateOutputType = {
    id: number
    userId: number
    allowContext: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AiConsentMinAggregateInputType = {
    id?: true
    userId?: true
    allowContext?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiConsentMaxAggregateInputType = {
    id?: true
    userId?: true
    allowContext?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AiConsentCountAggregateInputType = {
    id?: true
    userId?: true
    allowContext?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AiConsentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiConsent to aggregate.
     */
    where?: AiConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiConsents to fetch.
     */
    orderBy?: AiConsentOrderByWithRelationInput | AiConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiConsents
    **/
    _count?: true | AiConsentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiConsentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiConsentMaxAggregateInputType
  }

  export type GetAiConsentAggregateType<T extends AiConsentAggregateArgs> = {
        [P in keyof T & keyof AggregateAiConsent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiConsent[P]>
      : GetScalarType<T[P], AggregateAiConsent[P]>
  }




  export type AiConsentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiConsentWhereInput
    orderBy?: AiConsentOrderByWithAggregationInput | AiConsentOrderByWithAggregationInput[]
    by: AiConsentScalarFieldEnum[] | AiConsentScalarFieldEnum
    having?: AiConsentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiConsentCountAggregateInputType | true
    _min?: AiConsentMinAggregateInputType
    _max?: AiConsentMaxAggregateInputType
  }

  export type AiConsentGroupByOutputType = {
    id: string
    userId: string
    allowContext: boolean
    createdAt: Date
    updatedAt: Date
    _count: AiConsentCountAggregateOutputType | null
    _min: AiConsentMinAggregateOutputType | null
    _max: AiConsentMaxAggregateOutputType | null
  }

  type GetAiConsentGroupByPayload<T extends AiConsentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiConsentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiConsentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiConsentGroupByOutputType[P]>
            : GetScalarType<T[P], AiConsentGroupByOutputType[P]>
        }
      >
    >


  export type AiConsentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allowContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiConsent"]>

  export type AiConsentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allowContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiConsent"]>

  export type AiConsentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allowContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiConsent"]>

  export type AiConsentSelectScalar = {
    id?: boolean
    userId?: boolean
    allowContext?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AiConsentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "allowContext" | "createdAt" | "updatedAt", ExtArgs["result"]["aiConsent"]>
  export type AiConsentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AiConsentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AiConsentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AiConsentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiConsent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      allowContext: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aiConsent"]>
    composites: {}
  }

  type AiConsentGetPayload<S extends boolean | null | undefined | AiConsentDefaultArgs> = $Result.GetResult<Prisma.$AiConsentPayload, S>

  type AiConsentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiConsentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiConsentCountAggregateInputType | true
    }

  export interface AiConsentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiConsent'], meta: { name: 'AiConsent' } }
    /**
     * Find zero or one AiConsent that matches the filter.
     * @param {AiConsentFindUniqueArgs} args - Arguments to find a AiConsent
     * @example
     * // Get one AiConsent
     * const aiConsent = await prisma.aiConsent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiConsentFindUniqueArgs>(args: SelectSubset<T, AiConsentFindUniqueArgs<ExtArgs>>): Prisma__AiConsentClient<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiConsent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiConsentFindUniqueOrThrowArgs} args - Arguments to find a AiConsent
     * @example
     * // Get one AiConsent
     * const aiConsent = await prisma.aiConsent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiConsentFindUniqueOrThrowArgs>(args: SelectSubset<T, AiConsentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiConsentClient<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiConsent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConsentFindFirstArgs} args - Arguments to find a AiConsent
     * @example
     * // Get one AiConsent
     * const aiConsent = await prisma.aiConsent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiConsentFindFirstArgs>(args?: SelectSubset<T, AiConsentFindFirstArgs<ExtArgs>>): Prisma__AiConsentClient<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiConsent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConsentFindFirstOrThrowArgs} args - Arguments to find a AiConsent
     * @example
     * // Get one AiConsent
     * const aiConsent = await prisma.aiConsent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiConsentFindFirstOrThrowArgs>(args?: SelectSubset<T, AiConsentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiConsentClient<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiConsents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConsentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiConsents
     * const aiConsents = await prisma.aiConsent.findMany()
     * 
     * // Get first 10 AiConsents
     * const aiConsents = await prisma.aiConsent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiConsentWithIdOnly = await prisma.aiConsent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiConsentFindManyArgs>(args?: SelectSubset<T, AiConsentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiConsent.
     * @param {AiConsentCreateArgs} args - Arguments to create a AiConsent.
     * @example
     * // Create one AiConsent
     * const AiConsent = await prisma.aiConsent.create({
     *   data: {
     *     // ... data to create a AiConsent
     *   }
     * })
     * 
     */
    create<T extends AiConsentCreateArgs>(args: SelectSubset<T, AiConsentCreateArgs<ExtArgs>>): Prisma__AiConsentClient<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiConsents.
     * @param {AiConsentCreateManyArgs} args - Arguments to create many AiConsents.
     * @example
     * // Create many AiConsents
     * const aiConsent = await prisma.aiConsent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiConsentCreateManyArgs>(args?: SelectSubset<T, AiConsentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiConsents and returns the data saved in the database.
     * @param {AiConsentCreateManyAndReturnArgs} args - Arguments to create many AiConsents.
     * @example
     * // Create many AiConsents
     * const aiConsent = await prisma.aiConsent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiConsents and only return the `id`
     * const aiConsentWithIdOnly = await prisma.aiConsent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiConsentCreateManyAndReturnArgs>(args?: SelectSubset<T, AiConsentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiConsent.
     * @param {AiConsentDeleteArgs} args - Arguments to delete one AiConsent.
     * @example
     * // Delete one AiConsent
     * const AiConsent = await prisma.aiConsent.delete({
     *   where: {
     *     // ... filter to delete one AiConsent
     *   }
     * })
     * 
     */
    delete<T extends AiConsentDeleteArgs>(args: SelectSubset<T, AiConsentDeleteArgs<ExtArgs>>): Prisma__AiConsentClient<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiConsent.
     * @param {AiConsentUpdateArgs} args - Arguments to update one AiConsent.
     * @example
     * // Update one AiConsent
     * const aiConsent = await prisma.aiConsent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiConsentUpdateArgs>(args: SelectSubset<T, AiConsentUpdateArgs<ExtArgs>>): Prisma__AiConsentClient<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiConsents.
     * @param {AiConsentDeleteManyArgs} args - Arguments to filter AiConsents to delete.
     * @example
     * // Delete a few AiConsents
     * const { count } = await prisma.aiConsent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiConsentDeleteManyArgs>(args?: SelectSubset<T, AiConsentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConsentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiConsents
     * const aiConsent = await prisma.aiConsent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiConsentUpdateManyArgs>(args: SelectSubset<T, AiConsentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiConsents and returns the data updated in the database.
     * @param {AiConsentUpdateManyAndReturnArgs} args - Arguments to update many AiConsents.
     * @example
     * // Update many AiConsents
     * const aiConsent = await prisma.aiConsent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiConsents and only return the `id`
     * const aiConsentWithIdOnly = await prisma.aiConsent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiConsentUpdateManyAndReturnArgs>(args: SelectSubset<T, AiConsentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiConsent.
     * @param {AiConsentUpsertArgs} args - Arguments to update or create a AiConsent.
     * @example
     * // Update or create a AiConsent
     * const aiConsent = await prisma.aiConsent.upsert({
     *   create: {
     *     // ... data to create a AiConsent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiConsent we want to update
     *   }
     * })
     */
    upsert<T extends AiConsentUpsertArgs>(args: SelectSubset<T, AiConsentUpsertArgs<ExtArgs>>): Prisma__AiConsentClient<$Result.GetResult<Prisma.$AiConsentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConsentCountArgs} args - Arguments to filter AiConsents to count.
     * @example
     * // Count the number of AiConsents
     * const count = await prisma.aiConsent.count({
     *   where: {
     *     // ... the filter for the AiConsents we want to count
     *   }
     * })
    **/
    count<T extends AiConsentCountArgs>(
      args?: Subset<T, AiConsentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiConsentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConsentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiConsentAggregateArgs>(args: Subset<T, AiConsentAggregateArgs>): Prisma.PrismaPromise<GetAiConsentAggregateType<T>>

    /**
     * Group by AiConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConsentGroupByArgs} args - Group by arguments.
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
      T extends AiConsentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiConsentGroupByArgs['orderBy'] }
        : { orderBy?: AiConsentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiConsentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiConsentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiConsent model
   */
  readonly fields: AiConsentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiConsent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiConsentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiConsent model
   */
  interface AiConsentFieldRefs {
    readonly id: FieldRef<"AiConsent", 'String'>
    readonly userId: FieldRef<"AiConsent", 'String'>
    readonly allowContext: FieldRef<"AiConsent", 'Boolean'>
    readonly createdAt: FieldRef<"AiConsent", 'DateTime'>
    readonly updatedAt: FieldRef<"AiConsent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiConsent findUnique
   */
  export type AiConsentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    /**
     * Filter, which AiConsent to fetch.
     */
    where: AiConsentWhereUniqueInput
  }

  /**
   * AiConsent findUniqueOrThrow
   */
  export type AiConsentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    /**
     * Filter, which AiConsent to fetch.
     */
    where: AiConsentWhereUniqueInput
  }

  /**
   * AiConsent findFirst
   */
  export type AiConsentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    /**
     * Filter, which AiConsent to fetch.
     */
    where?: AiConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiConsents to fetch.
     */
    orderBy?: AiConsentOrderByWithRelationInput | AiConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiConsents.
     */
    cursor?: AiConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiConsents.
     */
    distinct?: AiConsentScalarFieldEnum | AiConsentScalarFieldEnum[]
  }

  /**
   * AiConsent findFirstOrThrow
   */
  export type AiConsentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    /**
     * Filter, which AiConsent to fetch.
     */
    where?: AiConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiConsents to fetch.
     */
    orderBy?: AiConsentOrderByWithRelationInput | AiConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiConsents.
     */
    cursor?: AiConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiConsents.
     */
    distinct?: AiConsentScalarFieldEnum | AiConsentScalarFieldEnum[]
  }

  /**
   * AiConsent findMany
   */
  export type AiConsentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    /**
     * Filter, which AiConsents to fetch.
     */
    where?: AiConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiConsents to fetch.
     */
    orderBy?: AiConsentOrderByWithRelationInput | AiConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiConsents.
     */
    cursor?: AiConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiConsents.
     */
    distinct?: AiConsentScalarFieldEnum | AiConsentScalarFieldEnum[]
  }

  /**
   * AiConsent create
   */
  export type AiConsentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    /**
     * The data needed to create a AiConsent.
     */
    data: XOR<AiConsentCreateInput, AiConsentUncheckedCreateInput>
  }

  /**
   * AiConsent createMany
   */
  export type AiConsentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiConsents.
     */
    data: AiConsentCreateManyInput | AiConsentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiConsent createManyAndReturn
   */
  export type AiConsentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * The data used to create many AiConsents.
     */
    data: AiConsentCreateManyInput | AiConsentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiConsent update
   */
  export type AiConsentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    /**
     * The data needed to update a AiConsent.
     */
    data: XOR<AiConsentUpdateInput, AiConsentUncheckedUpdateInput>
    /**
     * Choose, which AiConsent to update.
     */
    where: AiConsentWhereUniqueInput
  }

  /**
   * AiConsent updateMany
   */
  export type AiConsentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiConsents.
     */
    data: XOR<AiConsentUpdateManyMutationInput, AiConsentUncheckedUpdateManyInput>
    /**
     * Filter which AiConsents to update
     */
    where?: AiConsentWhereInput
    /**
     * Limit how many AiConsents to update.
     */
    limit?: number
  }

  /**
   * AiConsent updateManyAndReturn
   */
  export type AiConsentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * The data used to update AiConsents.
     */
    data: XOR<AiConsentUpdateManyMutationInput, AiConsentUncheckedUpdateManyInput>
    /**
     * Filter which AiConsents to update
     */
    where?: AiConsentWhereInput
    /**
     * Limit how many AiConsents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiConsent upsert
   */
  export type AiConsentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    /**
     * The filter to search for the AiConsent to update in case it exists.
     */
    where: AiConsentWhereUniqueInput
    /**
     * In case the AiConsent found by the `where` argument doesn't exist, create a new AiConsent with this data.
     */
    create: XOR<AiConsentCreateInput, AiConsentUncheckedCreateInput>
    /**
     * In case the AiConsent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiConsentUpdateInput, AiConsentUncheckedUpdateInput>
  }

  /**
   * AiConsent delete
   */
  export type AiConsentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
    /**
     * Filter which AiConsent to delete.
     */
    where: AiConsentWhereUniqueInput
  }

  /**
   * AiConsent deleteMany
   */
  export type AiConsentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiConsents to delete
     */
    where?: AiConsentWhereInput
    /**
     * Limit how many AiConsents to delete.
     */
    limit?: number
  }

  /**
   * AiConsent without action
   */
  export type AiConsentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConsent
     */
    select?: AiConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConsent
     */
    omit?: AiConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConsentInclude<ExtArgs> | null
  }


  /**
   * Model AiUsage
   */

  export type AggregateAiUsage = {
    _count: AiUsageCountAggregateOutputType | null
    _avg: AiUsageAvgAggregateOutputType | null
    _sum: AiUsageSumAggregateOutputType | null
    _min: AiUsageMinAggregateOutputType | null
    _max: AiUsageMaxAggregateOutputType | null
  }

  export type AiUsageAvgAggregateOutputType = {
    inputTokens: number | null
    outputTokens: number | null
  }

  export type AiUsageSumAggregateOutputType = {
    inputTokens: number | null
    outputTokens: number | null
  }

  export type AiUsageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    contextUsed: boolean | null
    inputTokens: number | null
    outputTokens: number | null
    createdAt: Date | null
  }

  export type AiUsageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    contextUsed: boolean | null
    inputTokens: number | null
    outputTokens: number | null
    createdAt: Date | null
  }

  export type AiUsageCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    contextUsed: number
    inputTokens: number
    outputTokens: number
    createdAt: number
    _all: number
  }


  export type AiUsageAvgAggregateInputType = {
    inputTokens?: true
    outputTokens?: true
  }

  export type AiUsageSumAggregateInputType = {
    inputTokens?: true
    outputTokens?: true
  }

  export type AiUsageMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    contextUsed?: true
    inputTokens?: true
    outputTokens?: true
    createdAt?: true
  }

  export type AiUsageMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    contextUsed?: true
    inputTokens?: true
    outputTokens?: true
    createdAt?: true
  }

  export type AiUsageCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    contextUsed?: true
    inputTokens?: true
    outputTokens?: true
    createdAt?: true
    _all?: true
  }

  export type AiUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiUsage to aggregate.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiUsages
    **/
    _count?: true | AiUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiUsageMaxAggregateInputType
  }

  export type GetAiUsageAggregateType<T extends AiUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateAiUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiUsage[P]>
      : GetScalarType<T[P], AggregateAiUsage[P]>
  }




  export type AiUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiUsageWhereInput
    orderBy?: AiUsageOrderByWithAggregationInput | AiUsageOrderByWithAggregationInput[]
    by: AiUsageScalarFieldEnum[] | AiUsageScalarFieldEnum
    having?: AiUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiUsageCountAggregateInputType | true
    _avg?: AiUsageAvgAggregateInputType
    _sum?: AiUsageSumAggregateInputType
    _min?: AiUsageMinAggregateInputType
    _max?: AiUsageMaxAggregateInputType
  }

  export type AiUsageGroupByOutputType = {
    id: string
    userId: string
    status: string
    contextUsed: boolean
    inputTokens: number | null
    outputTokens: number | null
    createdAt: Date
    _count: AiUsageCountAggregateOutputType | null
    _avg: AiUsageAvgAggregateOutputType | null
    _sum: AiUsageSumAggregateOutputType | null
    _min: AiUsageMinAggregateOutputType | null
    _max: AiUsageMaxAggregateOutputType | null
  }

  type GetAiUsageGroupByPayload<T extends AiUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiUsageGroupByOutputType[P]>
            : GetScalarType<T[P], AiUsageGroupByOutputType[P]>
        }
      >
    >


  export type AiUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    contextUsed?: boolean
    inputTokens?: boolean
    outputTokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiUsage"]>

  export type AiUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    contextUsed?: boolean
    inputTokens?: boolean
    outputTokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiUsage"]>

  export type AiUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    contextUsed?: boolean
    inputTokens?: boolean
    outputTokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiUsage"]>

  export type AiUsageSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    contextUsed?: boolean
    inputTokens?: boolean
    outputTokens?: boolean
    createdAt?: boolean
  }

  export type AiUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "contextUsed" | "inputTokens" | "outputTokens" | "createdAt", ExtArgs["result"]["aiUsage"]>
  export type AiUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AiUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AiUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AiUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiUsage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: string
      contextUsed: boolean
      inputTokens: number | null
      outputTokens: number | null
      createdAt: Date
    }, ExtArgs["result"]["aiUsage"]>
    composites: {}
  }

  type AiUsageGetPayload<S extends boolean | null | undefined | AiUsageDefaultArgs> = $Result.GetResult<Prisma.$AiUsagePayload, S>

  type AiUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiUsageCountAggregateInputType | true
    }

  export interface AiUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiUsage'], meta: { name: 'AiUsage' } }
    /**
     * Find zero or one AiUsage that matches the filter.
     * @param {AiUsageFindUniqueArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiUsageFindUniqueArgs>(args: SelectSubset<T, AiUsageFindUniqueArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiUsageFindUniqueOrThrowArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, AiUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageFindFirstArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiUsageFindFirstArgs>(args?: SelectSubset<T, AiUsageFindFirstArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageFindFirstOrThrowArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, AiUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiUsages
     * const aiUsages = await prisma.aiUsage.findMany()
     * 
     * // Get first 10 AiUsages
     * const aiUsages = await prisma.aiUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiUsageWithIdOnly = await prisma.aiUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiUsageFindManyArgs>(args?: SelectSubset<T, AiUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiUsage.
     * @param {AiUsageCreateArgs} args - Arguments to create a AiUsage.
     * @example
     * // Create one AiUsage
     * const AiUsage = await prisma.aiUsage.create({
     *   data: {
     *     // ... data to create a AiUsage
     *   }
     * })
     * 
     */
    create<T extends AiUsageCreateArgs>(args: SelectSubset<T, AiUsageCreateArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiUsages.
     * @param {AiUsageCreateManyArgs} args - Arguments to create many AiUsages.
     * @example
     * // Create many AiUsages
     * const aiUsage = await prisma.aiUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiUsageCreateManyArgs>(args?: SelectSubset<T, AiUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiUsages and returns the data saved in the database.
     * @param {AiUsageCreateManyAndReturnArgs} args - Arguments to create many AiUsages.
     * @example
     * // Create many AiUsages
     * const aiUsage = await prisma.aiUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiUsages and only return the `id`
     * const aiUsageWithIdOnly = await prisma.aiUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, AiUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiUsage.
     * @param {AiUsageDeleteArgs} args - Arguments to delete one AiUsage.
     * @example
     * // Delete one AiUsage
     * const AiUsage = await prisma.aiUsage.delete({
     *   where: {
     *     // ... filter to delete one AiUsage
     *   }
     * })
     * 
     */
    delete<T extends AiUsageDeleteArgs>(args: SelectSubset<T, AiUsageDeleteArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiUsage.
     * @param {AiUsageUpdateArgs} args - Arguments to update one AiUsage.
     * @example
     * // Update one AiUsage
     * const aiUsage = await prisma.aiUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiUsageUpdateArgs>(args: SelectSubset<T, AiUsageUpdateArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiUsages.
     * @param {AiUsageDeleteManyArgs} args - Arguments to filter AiUsages to delete.
     * @example
     * // Delete a few AiUsages
     * const { count } = await prisma.aiUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiUsageDeleteManyArgs>(args?: SelectSubset<T, AiUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiUsages
     * const aiUsage = await prisma.aiUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiUsageUpdateManyArgs>(args: SelectSubset<T, AiUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiUsages and returns the data updated in the database.
     * @param {AiUsageUpdateManyAndReturnArgs} args - Arguments to update many AiUsages.
     * @example
     * // Update many AiUsages
     * const aiUsage = await prisma.aiUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiUsages and only return the `id`
     * const aiUsageWithIdOnly = await prisma.aiUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, AiUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiUsage.
     * @param {AiUsageUpsertArgs} args - Arguments to update or create a AiUsage.
     * @example
     * // Update or create a AiUsage
     * const aiUsage = await prisma.aiUsage.upsert({
     *   create: {
     *     // ... data to create a AiUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiUsage we want to update
     *   }
     * })
     */
    upsert<T extends AiUsageUpsertArgs>(args: SelectSubset<T, AiUsageUpsertArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageCountArgs} args - Arguments to filter AiUsages to count.
     * @example
     * // Count the number of AiUsages
     * const count = await prisma.aiUsage.count({
     *   where: {
     *     // ... the filter for the AiUsages we want to count
     *   }
     * })
    **/
    count<T extends AiUsageCountArgs>(
      args?: Subset<T, AiUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiUsageAggregateArgs>(args: Subset<T, AiUsageAggregateArgs>): Prisma.PrismaPromise<GetAiUsageAggregateType<T>>

    /**
     * Group by AiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageGroupByArgs} args - Group by arguments.
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
      T extends AiUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiUsageGroupByArgs['orderBy'] }
        : { orderBy?: AiUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiUsage model
   */
  readonly fields: AiUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiUsage model
   */
  interface AiUsageFieldRefs {
    readonly id: FieldRef<"AiUsage", 'String'>
    readonly userId: FieldRef<"AiUsage", 'String'>
    readonly status: FieldRef<"AiUsage", 'String'>
    readonly contextUsed: FieldRef<"AiUsage", 'Boolean'>
    readonly inputTokens: FieldRef<"AiUsage", 'Int'>
    readonly outputTokens: FieldRef<"AiUsage", 'Int'>
    readonly createdAt: FieldRef<"AiUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiUsage findUnique
   */
  export type AiUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage findUniqueOrThrow
   */
  export type AiUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage findFirst
   */
  export type AiUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiUsages.
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsages.
     */
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * AiUsage findFirstOrThrow
   */
  export type AiUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiUsages.
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsages.
     */
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * AiUsage findMany
   */
  export type AiUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsages to fetch.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiUsages.
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsages.
     */
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * AiUsage create
   */
  export type AiUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a AiUsage.
     */
    data: XOR<AiUsageCreateInput, AiUsageUncheckedCreateInput>
  }

  /**
   * AiUsage createMany
   */
  export type AiUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiUsages.
     */
    data: AiUsageCreateManyInput | AiUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiUsage createManyAndReturn
   */
  export type AiUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * The data used to create many AiUsages.
     */
    data: AiUsageCreateManyInput | AiUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiUsage update
   */
  export type AiUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a AiUsage.
     */
    data: XOR<AiUsageUpdateInput, AiUsageUncheckedUpdateInput>
    /**
     * Choose, which AiUsage to update.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage updateMany
   */
  export type AiUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiUsages.
     */
    data: XOR<AiUsageUpdateManyMutationInput, AiUsageUncheckedUpdateManyInput>
    /**
     * Filter which AiUsages to update
     */
    where?: AiUsageWhereInput
    /**
     * Limit how many AiUsages to update.
     */
    limit?: number
  }

  /**
   * AiUsage updateManyAndReturn
   */
  export type AiUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * The data used to update AiUsages.
     */
    data: XOR<AiUsageUpdateManyMutationInput, AiUsageUncheckedUpdateManyInput>
    /**
     * Filter which AiUsages to update
     */
    where?: AiUsageWhereInput
    /**
     * Limit how many AiUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiUsage upsert
   */
  export type AiUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the AiUsage to update in case it exists.
     */
    where: AiUsageWhereUniqueInput
    /**
     * In case the AiUsage found by the `where` argument doesn't exist, create a new AiUsage with this data.
     */
    create: XOR<AiUsageCreateInput, AiUsageUncheckedCreateInput>
    /**
     * In case the AiUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiUsageUpdateInput, AiUsageUncheckedUpdateInput>
  }

  /**
   * AiUsage delete
   */
  export type AiUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter which AiUsage to delete.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage deleteMany
   */
  export type AiUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiUsages to delete
     */
    where?: AiUsageWhereInput
    /**
     * Limit how many AiUsages to delete.
     */
    limit?: number
  }

  /**
   * AiUsage without action
   */
  export type AiUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    role: $Enums.ChatRole | null
    content: string | null
    contextUsed: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    role: $Enums.ChatRole | null
    content: string | null
    contextUsed: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    content: number
    contextUsed: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    contextUsed?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    contextUsed?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    contextUsed?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    userId: string
    role: $Enums.ChatRole
    content: string
    contextUsed: boolean
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    contextUsed?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    contextUsed?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    contextUsed?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    contextUsed?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "role" | "content" | "contextUsed" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      role: $Enums.ChatRole
      content: string
      contextUsed: boolean
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'ChatRole'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly contextUsed: FieldRef<"ChatMessage", 'Boolean'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: bigint | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: bigint | null
    userId: string | null
    eventType: string | null
    level: $Enums.LogLevel | null
    component: string | null
    errorCode: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: bigint | null
    userId: string | null
    eventType: string | null
    level: $Enums.LogLevel | null
    component: string | null
    errorCode: string | null
    message: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    eventType: number
    level: number
    component: number
    errorCode: number
    message: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    level?: true
    component?: true
    errorCode?: true
    message?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    level?: true
    component?: true
    errorCode?: true
    message?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    level?: true
    component?: true
    errorCode?: true
    message?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: bigint
    userId: string | null
    eventType: string
    level: $Enums.LogLevel
    component: string | null
    errorCode: string | null
    message: string
    metadata: JsonValue | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    level?: boolean
    component?: boolean
    errorCode?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    level?: boolean
    component?: boolean
    errorCode?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    level?: boolean
    component?: boolean
    errorCode?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    eventType?: boolean
    level?: boolean
    component?: boolean
    errorCode?: boolean
    message?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventType" | "level" | "component" | "errorCode" | "message" | "metadata" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: string | null
      eventType: string
      level: $Enums.LogLevel
      component: string | null
      errorCode: string | null
      message: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'BigInt'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly eventType: FieldRef<"ActivityLog", 'String'>
    readonly level: FieldRef<"ActivityLog", 'LogLevel'>
    readonly component: FieldRef<"ActivityLog", 'String'>
    readonly errorCode: FieldRef<"ActivityLog", 'String'>
    readonly message: FieldRef<"ActivityLog", 'String'>
    readonly metadata: FieldRef<"ActivityLog", 'Json'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusinessProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    sector: 'sector',
    sectorOther: 'sectorOther',
    address: 'address',
    quarterlyRevenueTarget: 'quarterlyRevenueTarget',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessProfileScalarFieldEnum = (typeof BusinessProfileScalarFieldEnum)[keyof typeof BusinessProfileScalarFieldEnum]


  export const AnalysisConfigScalarFieldEnum: {
    id: 'id',
    module: 'module',
    versionNumber: 'versionNumber',
    isActive: 'isActive',
    parameters: 'parameters',
    note: 'note',
    createdById: 'createdById',
    activatedAt: 'activatedAt',
    createdAt: 'createdAt'
  };

  export type AnalysisConfigScalarFieldEnum = (typeof AnalysisConfigScalarFieldEnum)[keyof typeof AnalysisConfigScalarFieldEnum]


  export const LocationAnalysisScalarFieldEnum: {
    id: 'id',
    code: 'code',
    userId: 'userId',
    businessProfileId: 'businessProfileId',
    configId: 'configId',
    locationName: 'locationName',
    district: 'district',
    latitude: 'latitude',
    longitude: 'longitude',
    rentCost: 'rentCost',
    competitorCount: 'competitorCount',
    accessibility: 'accessibility',
    marketPotential: 'marketPotential',
    score: 'score',
    category: 'category',
    details: 'details',
    strongestFactor: 'strongestFactor',
    weakestFactor: 'weakestFactor',
    warnings: 'warnings',
    createdAt: 'createdAt'
  };

  export type LocationAnalysisScalarFieldEnum = (typeof LocationAnalysisScalarFieldEnum)[keyof typeof LocationAnalysisScalarFieldEnum]


  export const FinancialAnalysisScalarFieldEnum: {
    id: 'id',
    code: 'code',
    userId: 'userId',
    businessProfileId: 'businessProfileId',
    configId: 'configId',
    fileName: 'fileName',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    periodsAnalyzed: 'periodsAnalyzed',
    ratios: 'ratios',
    ruleResults: 'ruleResults',
    patterns: 'patterns',
    excludedRules: 'excludedRules',
    warnings: 'warnings',
    riskIndex: 'riskIndex',
    riskLevel: 'riskLevel',
    createdAt: 'createdAt'
  };

  export type FinancialAnalysisScalarFieldEnum = (typeof FinancialAnalysisScalarFieldEnum)[keyof typeof FinancialAnalysisScalarFieldEnum]


  export const FinancialPeriodScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessProfileId: 'businessProfileId',
    periodStart: 'periodStart',
    revenue: 'revenue',
    cogs: 'cogs',
    operatingExpense: 'operatingExpense',
    netIncome: 'netIncome',
    currentAssets: 'currentAssets',
    inventory: 'inventory',
    totalAssets: 'totalAssets',
    currentLiabilities: 'currentLiabilities',
    totalLiabilities: 'totalLiabilities',
    equity: 'equity',
    sourceAnalysisId: 'sourceAnalysisId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinancialPeriodScalarFieldEnum = (typeof FinancialPeriodScalarFieldEnum)[keyof typeof FinancialPeriodScalarFieldEnum]


  export const AiConsentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    allowContext: 'allowContext',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AiConsentScalarFieldEnum = (typeof AiConsentScalarFieldEnum)[keyof typeof AiConsentScalarFieldEnum]


  export const AiUsageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    contextUsed: 'contextUsed',
    inputTokens: 'inputTokens',
    outputTokens: 'outputTokens',
    createdAt: 'createdAt'
  };

  export type AiUsageScalarFieldEnum = (typeof AiUsageScalarFieldEnum)[keyof typeof AiUsageScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    content: 'content',
    contextUsed: 'contextUsed',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventType: 'eventType',
    level: 'level',
    component: 'component',
    errorCode: 'errorCode',
    message: 'message',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ConfigModule'
   */
  export type EnumConfigModuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConfigModule'>
    


  /**
   * Reference to a field of type 'ConfigModule[]'
   */
  export type ListEnumConfigModuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConfigModule[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'LocationCategory'
   */
  export type EnumLocationCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationCategory'>
    


  /**
   * Reference to a field of type 'LocationCategory[]'
   */
  export type ListEnumLocationCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationCategory[]'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'RiskLevel[]'
   */
  export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>
    


  /**
   * Reference to a field of type 'ChatRole'
   */
  export type EnumChatRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatRole'>
    


  /**
   * Reference to a field of type 'ChatRole[]'
   */
  export type ListEnumChatRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatRole[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'LogLevel'
   */
  export type EnumLogLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogLevel'>
    


  /**
   * Reference to a field of type 'LogLevel[]'
   */
  export type ListEnumLogLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogLevel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    businessProfile?: XOR<BusinessProfileNullableScalarRelationFilter, BusinessProfileWhereInput> | null
    locationAnalyses?: LocationAnalysisListRelationFilter
    financialAnalyses?: FinancialAnalysisListRelationFilter
    financialPeriods?: FinancialPeriodListRelationFilter
    aiConsent?: XOR<AiConsentNullableScalarRelationFilter, AiConsentWhereInput> | null
    aiUsages?: AiUsageListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    createdConfigs?: AnalysisConfigListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessProfile?: BusinessProfileOrderByWithRelationInput
    locationAnalyses?: LocationAnalysisOrderByRelationAggregateInput
    financialAnalyses?: FinancialAnalysisOrderByRelationAggregateInput
    financialPeriods?: FinancialPeriodOrderByRelationAggregateInput
    aiConsent?: AiConsentOrderByWithRelationInput
    aiUsages?: AiUsageOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    createdConfigs?: AnalysisConfigOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    businessProfile?: XOR<BusinessProfileNullableScalarRelationFilter, BusinessProfileWhereInput> | null
    locationAnalyses?: LocationAnalysisListRelationFilter
    financialAnalyses?: FinancialAnalysisListRelationFilter
    financialPeriods?: FinancialPeriodListRelationFilter
    aiConsent?: XOR<AiConsentNullableScalarRelationFilter, AiConsentWhereInput> | null
    aiUsages?: AiUsageListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    createdConfigs?: AnalysisConfigListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BusinessProfileWhereInput = {
    AND?: BusinessProfileWhereInput | BusinessProfileWhereInput[]
    OR?: BusinessProfileWhereInput[]
    NOT?: BusinessProfileWhereInput | BusinessProfileWhereInput[]
    id?: UuidFilter<"BusinessProfile"> | string
    userId?: UuidFilter<"BusinessProfile"> | string
    name?: StringFilter<"BusinessProfile"> | string
    sector?: StringFilter<"BusinessProfile"> | string
    sectorOther?: StringNullableFilter<"BusinessProfile"> | string | null
    address?: StringFilter<"BusinessProfile"> | string
    quarterlyRevenueTarget?: DecimalNullableFilter<"BusinessProfile"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"BusinessProfile"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    locationAnalyses?: LocationAnalysisListRelationFilter
    financialAnalyses?: FinancialAnalysisListRelationFilter
    financialPeriods?: FinancialPeriodListRelationFilter
  }

  export type BusinessProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    sectorOther?: SortOrderInput | SortOrder
    address?: SortOrder
    quarterlyRevenueTarget?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    locationAnalyses?: LocationAnalysisOrderByRelationAggregateInput
    financialAnalyses?: FinancialAnalysisOrderByRelationAggregateInput
    financialPeriods?: FinancialPeriodOrderByRelationAggregateInput
  }

  export type BusinessProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BusinessProfileWhereInput | BusinessProfileWhereInput[]
    OR?: BusinessProfileWhereInput[]
    NOT?: BusinessProfileWhereInput | BusinessProfileWhereInput[]
    name?: StringFilter<"BusinessProfile"> | string
    sector?: StringFilter<"BusinessProfile"> | string
    sectorOther?: StringNullableFilter<"BusinessProfile"> | string | null
    address?: StringFilter<"BusinessProfile"> | string
    quarterlyRevenueTarget?: DecimalNullableFilter<"BusinessProfile"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"BusinessProfile"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    locationAnalyses?: LocationAnalysisListRelationFilter
    financialAnalyses?: FinancialAnalysisListRelationFilter
    financialPeriods?: FinancialPeriodListRelationFilter
  }, "id" | "userId">

  export type BusinessProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    sectorOther?: SortOrderInput | SortOrder
    address?: SortOrder
    quarterlyRevenueTarget?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessProfileCountOrderByAggregateInput
    _avg?: BusinessProfileAvgOrderByAggregateInput
    _max?: BusinessProfileMaxOrderByAggregateInput
    _min?: BusinessProfileMinOrderByAggregateInput
    _sum?: BusinessProfileSumOrderByAggregateInput
  }

  export type BusinessProfileScalarWhereWithAggregatesInput = {
    AND?: BusinessProfileScalarWhereWithAggregatesInput | BusinessProfileScalarWhereWithAggregatesInput[]
    OR?: BusinessProfileScalarWhereWithAggregatesInput[]
    NOT?: BusinessProfileScalarWhereWithAggregatesInput | BusinessProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BusinessProfile"> | string
    userId?: UuidWithAggregatesFilter<"BusinessProfile"> | string
    name?: StringWithAggregatesFilter<"BusinessProfile"> | string
    sector?: StringWithAggregatesFilter<"BusinessProfile"> | string
    sectorOther?: StringNullableWithAggregatesFilter<"BusinessProfile"> | string | null
    address?: StringWithAggregatesFilter<"BusinessProfile"> | string
    quarterlyRevenueTarget?: DecimalNullableWithAggregatesFilter<"BusinessProfile"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BusinessProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessProfile"> | Date | string
  }

  export type AnalysisConfigWhereInput = {
    AND?: AnalysisConfigWhereInput | AnalysisConfigWhereInput[]
    OR?: AnalysisConfigWhereInput[]
    NOT?: AnalysisConfigWhereInput | AnalysisConfigWhereInput[]
    id?: UuidFilter<"AnalysisConfig"> | string
    module?: EnumConfigModuleFilter<"AnalysisConfig"> | $Enums.ConfigModule
    versionNumber?: IntFilter<"AnalysisConfig"> | number
    isActive?: BoolFilter<"AnalysisConfig"> | boolean
    parameters?: JsonFilter<"AnalysisConfig">
    note?: StringNullableFilter<"AnalysisConfig"> | string | null
    createdById?: UuidNullableFilter<"AnalysisConfig"> | string | null
    activatedAt?: DateTimeNullableFilter<"AnalysisConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"AnalysisConfig"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    locationAnalyses?: LocationAnalysisListRelationFilter
    financialAnalyses?: FinancialAnalysisListRelationFilter
  }

  export type AnalysisConfigOrderByWithRelationInput = {
    id?: SortOrder
    module?: SortOrder
    versionNumber?: SortOrder
    isActive?: SortOrder
    parameters?: SortOrder
    note?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    locationAnalyses?: LocationAnalysisOrderByRelationAggregateInput
    financialAnalyses?: FinancialAnalysisOrderByRelationAggregateInput
  }

  export type AnalysisConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    module_versionNumber?: AnalysisConfigModuleVersionNumberCompoundUniqueInput
    AND?: AnalysisConfigWhereInput | AnalysisConfigWhereInput[]
    OR?: AnalysisConfigWhereInput[]
    NOT?: AnalysisConfigWhereInput | AnalysisConfigWhereInput[]
    module?: EnumConfigModuleFilter<"AnalysisConfig"> | $Enums.ConfigModule
    versionNumber?: IntFilter<"AnalysisConfig"> | number
    isActive?: BoolFilter<"AnalysisConfig"> | boolean
    parameters?: JsonFilter<"AnalysisConfig">
    note?: StringNullableFilter<"AnalysisConfig"> | string | null
    createdById?: UuidNullableFilter<"AnalysisConfig"> | string | null
    activatedAt?: DateTimeNullableFilter<"AnalysisConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"AnalysisConfig"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    locationAnalyses?: LocationAnalysisListRelationFilter
    financialAnalyses?: FinancialAnalysisListRelationFilter
  }, "id" | "module_versionNumber">

  export type AnalysisConfigOrderByWithAggregationInput = {
    id?: SortOrder
    module?: SortOrder
    versionNumber?: SortOrder
    isActive?: SortOrder
    parameters?: SortOrder
    note?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    activatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalysisConfigCountOrderByAggregateInput
    _avg?: AnalysisConfigAvgOrderByAggregateInput
    _max?: AnalysisConfigMaxOrderByAggregateInput
    _min?: AnalysisConfigMinOrderByAggregateInput
    _sum?: AnalysisConfigSumOrderByAggregateInput
  }

  export type AnalysisConfigScalarWhereWithAggregatesInput = {
    AND?: AnalysisConfigScalarWhereWithAggregatesInput | AnalysisConfigScalarWhereWithAggregatesInput[]
    OR?: AnalysisConfigScalarWhereWithAggregatesInput[]
    NOT?: AnalysisConfigScalarWhereWithAggregatesInput | AnalysisConfigScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AnalysisConfig"> | string
    module?: EnumConfigModuleWithAggregatesFilter<"AnalysisConfig"> | $Enums.ConfigModule
    versionNumber?: IntWithAggregatesFilter<"AnalysisConfig"> | number
    isActive?: BoolWithAggregatesFilter<"AnalysisConfig"> | boolean
    parameters?: JsonWithAggregatesFilter<"AnalysisConfig">
    note?: StringNullableWithAggregatesFilter<"AnalysisConfig"> | string | null
    createdById?: UuidNullableWithAggregatesFilter<"AnalysisConfig"> | string | null
    activatedAt?: DateTimeNullableWithAggregatesFilter<"AnalysisConfig"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnalysisConfig"> | Date | string
  }

  export type LocationAnalysisWhereInput = {
    AND?: LocationAnalysisWhereInput | LocationAnalysisWhereInput[]
    OR?: LocationAnalysisWhereInput[]
    NOT?: LocationAnalysisWhereInput | LocationAnalysisWhereInput[]
    id?: UuidFilter<"LocationAnalysis"> | string
    code?: StringFilter<"LocationAnalysis"> | string
    userId?: UuidFilter<"LocationAnalysis"> | string
    businessProfileId?: UuidFilter<"LocationAnalysis"> | string
    configId?: UuidFilter<"LocationAnalysis"> | string
    locationName?: StringFilter<"LocationAnalysis"> | string
    district?: StringFilter<"LocationAnalysis"> | string
    latitude?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFilter<"LocationAnalysis"> | number
    accessibility?: IntFilter<"LocationAnalysis"> | number
    marketPotential?: IntFilter<"LocationAnalysis"> | number
    score?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFilter<"LocationAnalysis"> | $Enums.LocationCategory
    details?: JsonFilter<"LocationAnalysis">
    strongestFactor?: StringFilter<"LocationAnalysis"> | string
    weakestFactor?: StringFilter<"LocationAnalysis"> | string
    warnings?: JsonFilter<"LocationAnalysis">
    createdAt?: DateTimeFilter<"LocationAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    businessProfile?: XOR<BusinessProfileScalarRelationFilter, BusinessProfileWhereInput>
    config?: XOR<AnalysisConfigScalarRelationFilter, AnalysisConfigWhereInput>
  }

  export type LocationAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    locationName?: SortOrder
    district?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rentCost?: SortOrder
    competitorCount?: SortOrder
    accessibility?: SortOrder
    marketPotential?: SortOrder
    score?: SortOrder
    category?: SortOrder
    details?: SortOrder
    strongestFactor?: SortOrder
    weakestFactor?: SortOrder
    warnings?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    businessProfile?: BusinessProfileOrderByWithRelationInput
    config?: AnalysisConfigOrderByWithRelationInput
  }

  export type LocationAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: LocationAnalysisWhereInput | LocationAnalysisWhereInput[]
    OR?: LocationAnalysisWhereInput[]
    NOT?: LocationAnalysisWhereInput | LocationAnalysisWhereInput[]
    userId?: UuidFilter<"LocationAnalysis"> | string
    businessProfileId?: UuidFilter<"LocationAnalysis"> | string
    configId?: UuidFilter<"LocationAnalysis"> | string
    locationName?: StringFilter<"LocationAnalysis"> | string
    district?: StringFilter<"LocationAnalysis"> | string
    latitude?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFilter<"LocationAnalysis"> | number
    accessibility?: IntFilter<"LocationAnalysis"> | number
    marketPotential?: IntFilter<"LocationAnalysis"> | number
    score?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFilter<"LocationAnalysis"> | $Enums.LocationCategory
    details?: JsonFilter<"LocationAnalysis">
    strongestFactor?: StringFilter<"LocationAnalysis"> | string
    weakestFactor?: StringFilter<"LocationAnalysis"> | string
    warnings?: JsonFilter<"LocationAnalysis">
    createdAt?: DateTimeFilter<"LocationAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    businessProfile?: XOR<BusinessProfileScalarRelationFilter, BusinessProfileWhereInput>
    config?: XOR<AnalysisConfigScalarRelationFilter, AnalysisConfigWhereInput>
  }, "id" | "code">

  export type LocationAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    locationName?: SortOrder
    district?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rentCost?: SortOrder
    competitorCount?: SortOrder
    accessibility?: SortOrder
    marketPotential?: SortOrder
    score?: SortOrder
    category?: SortOrder
    details?: SortOrder
    strongestFactor?: SortOrder
    weakestFactor?: SortOrder
    warnings?: SortOrder
    createdAt?: SortOrder
    _count?: LocationAnalysisCountOrderByAggregateInput
    _avg?: LocationAnalysisAvgOrderByAggregateInput
    _max?: LocationAnalysisMaxOrderByAggregateInput
    _min?: LocationAnalysisMinOrderByAggregateInput
    _sum?: LocationAnalysisSumOrderByAggregateInput
  }

  export type LocationAnalysisScalarWhereWithAggregatesInput = {
    AND?: LocationAnalysisScalarWhereWithAggregatesInput | LocationAnalysisScalarWhereWithAggregatesInput[]
    OR?: LocationAnalysisScalarWhereWithAggregatesInput[]
    NOT?: LocationAnalysisScalarWhereWithAggregatesInput | LocationAnalysisScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LocationAnalysis"> | string
    code?: StringWithAggregatesFilter<"LocationAnalysis"> | string
    userId?: UuidWithAggregatesFilter<"LocationAnalysis"> | string
    businessProfileId?: UuidWithAggregatesFilter<"LocationAnalysis"> | string
    configId?: UuidWithAggregatesFilter<"LocationAnalysis"> | string
    locationName?: StringWithAggregatesFilter<"LocationAnalysis"> | string
    district?: StringWithAggregatesFilter<"LocationAnalysis"> | string
    latitude?: DecimalWithAggregatesFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalWithAggregatesFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    competitorCount?: IntWithAggregatesFilter<"LocationAnalysis"> | number
    accessibility?: IntWithAggregatesFilter<"LocationAnalysis"> | number
    marketPotential?: IntWithAggregatesFilter<"LocationAnalysis"> | number
    score?: DecimalWithAggregatesFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryWithAggregatesFilter<"LocationAnalysis"> | $Enums.LocationCategory
    details?: JsonWithAggregatesFilter<"LocationAnalysis">
    strongestFactor?: StringWithAggregatesFilter<"LocationAnalysis"> | string
    weakestFactor?: StringWithAggregatesFilter<"LocationAnalysis"> | string
    warnings?: JsonWithAggregatesFilter<"LocationAnalysis">
    createdAt?: DateTimeWithAggregatesFilter<"LocationAnalysis"> | Date | string
  }

  export type FinancialAnalysisWhereInput = {
    AND?: FinancialAnalysisWhereInput | FinancialAnalysisWhereInput[]
    OR?: FinancialAnalysisWhereInput[]
    NOT?: FinancialAnalysisWhereInput | FinancialAnalysisWhereInput[]
    id?: UuidFilter<"FinancialAnalysis"> | string
    code?: StringFilter<"FinancialAnalysis"> | string
    userId?: UuidFilter<"FinancialAnalysis"> | string
    businessProfileId?: UuidFilter<"FinancialAnalysis"> | string
    configId?: UuidFilter<"FinancialAnalysis"> | string
    fileName?: StringFilter<"FinancialAnalysis"> | string
    periodStart?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    periodEnd?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    periodsAnalyzed?: IntFilter<"FinancialAnalysis"> | number
    ratios?: JsonFilter<"FinancialAnalysis">
    ruleResults?: JsonFilter<"FinancialAnalysis">
    patterns?: JsonFilter<"FinancialAnalysis">
    excludedRules?: JsonFilter<"FinancialAnalysis">
    warnings?: JsonFilter<"FinancialAnalysis">
    riskIndex?: DecimalFilter<"FinancialAnalysis"> | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFilter<"FinancialAnalysis"> | $Enums.RiskLevel
    createdAt?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    businessProfile?: XOR<BusinessProfileScalarRelationFilter, BusinessProfileWhereInput>
    config?: XOR<AnalysisConfigScalarRelationFilter, AnalysisConfigWhereInput>
    periods?: FinancialPeriodListRelationFilter
  }

  export type FinancialAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    fileName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodsAnalyzed?: SortOrder
    ratios?: SortOrder
    ruleResults?: SortOrder
    patterns?: SortOrder
    excludedRules?: SortOrder
    warnings?: SortOrder
    riskIndex?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    businessProfile?: BusinessProfileOrderByWithRelationInput
    config?: AnalysisConfigOrderByWithRelationInput
    periods?: FinancialPeriodOrderByRelationAggregateInput
  }

  export type FinancialAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: FinancialAnalysisWhereInput | FinancialAnalysisWhereInput[]
    OR?: FinancialAnalysisWhereInput[]
    NOT?: FinancialAnalysisWhereInput | FinancialAnalysisWhereInput[]
    userId?: UuidFilter<"FinancialAnalysis"> | string
    businessProfileId?: UuidFilter<"FinancialAnalysis"> | string
    configId?: UuidFilter<"FinancialAnalysis"> | string
    fileName?: StringFilter<"FinancialAnalysis"> | string
    periodStart?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    periodEnd?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    periodsAnalyzed?: IntFilter<"FinancialAnalysis"> | number
    ratios?: JsonFilter<"FinancialAnalysis">
    ruleResults?: JsonFilter<"FinancialAnalysis">
    patterns?: JsonFilter<"FinancialAnalysis">
    excludedRules?: JsonFilter<"FinancialAnalysis">
    warnings?: JsonFilter<"FinancialAnalysis">
    riskIndex?: DecimalFilter<"FinancialAnalysis"> | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFilter<"FinancialAnalysis"> | $Enums.RiskLevel
    createdAt?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    businessProfile?: XOR<BusinessProfileScalarRelationFilter, BusinessProfileWhereInput>
    config?: XOR<AnalysisConfigScalarRelationFilter, AnalysisConfigWhereInput>
    periods?: FinancialPeriodListRelationFilter
  }, "id" | "code">

  export type FinancialAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    fileName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodsAnalyzed?: SortOrder
    ratios?: SortOrder
    ruleResults?: SortOrder
    patterns?: SortOrder
    excludedRules?: SortOrder
    warnings?: SortOrder
    riskIndex?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
    _count?: FinancialAnalysisCountOrderByAggregateInput
    _avg?: FinancialAnalysisAvgOrderByAggregateInput
    _max?: FinancialAnalysisMaxOrderByAggregateInput
    _min?: FinancialAnalysisMinOrderByAggregateInput
    _sum?: FinancialAnalysisSumOrderByAggregateInput
  }

  export type FinancialAnalysisScalarWhereWithAggregatesInput = {
    AND?: FinancialAnalysisScalarWhereWithAggregatesInput | FinancialAnalysisScalarWhereWithAggregatesInput[]
    OR?: FinancialAnalysisScalarWhereWithAggregatesInput[]
    NOT?: FinancialAnalysisScalarWhereWithAggregatesInput | FinancialAnalysisScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FinancialAnalysis"> | string
    code?: StringWithAggregatesFilter<"FinancialAnalysis"> | string
    userId?: UuidWithAggregatesFilter<"FinancialAnalysis"> | string
    businessProfileId?: UuidWithAggregatesFilter<"FinancialAnalysis"> | string
    configId?: UuidWithAggregatesFilter<"FinancialAnalysis"> | string
    fileName?: StringWithAggregatesFilter<"FinancialAnalysis"> | string
    periodStart?: DateTimeWithAggregatesFilter<"FinancialAnalysis"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"FinancialAnalysis"> | Date | string
    periodsAnalyzed?: IntWithAggregatesFilter<"FinancialAnalysis"> | number
    ratios?: JsonWithAggregatesFilter<"FinancialAnalysis">
    ruleResults?: JsonWithAggregatesFilter<"FinancialAnalysis">
    patterns?: JsonWithAggregatesFilter<"FinancialAnalysis">
    excludedRules?: JsonWithAggregatesFilter<"FinancialAnalysis">
    warnings?: JsonWithAggregatesFilter<"FinancialAnalysis">
    riskIndex?: DecimalWithAggregatesFilter<"FinancialAnalysis"> | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"FinancialAnalysis"> | $Enums.RiskLevel
    createdAt?: DateTimeWithAggregatesFilter<"FinancialAnalysis"> | Date | string
  }

  export type FinancialPeriodWhereInput = {
    AND?: FinancialPeriodWhereInput | FinancialPeriodWhereInput[]
    OR?: FinancialPeriodWhereInput[]
    NOT?: FinancialPeriodWhereInput | FinancialPeriodWhereInput[]
    id?: UuidFilter<"FinancialPeriod"> | string
    userId?: UuidFilter<"FinancialPeriod"> | string
    businessProfileId?: UuidFilter<"FinancialPeriod"> | string
    periodStart?: DateTimeFilter<"FinancialPeriod"> | Date | string
    revenue?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    equity?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: UuidFilter<"FinancialPeriod"> | string
    createdAt?: DateTimeFilter<"FinancialPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialPeriod"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    businessProfile?: XOR<BusinessProfileScalarRelationFilter, BusinessProfileWhereInput>
    sourceAnalysis?: XOR<FinancialAnalysisScalarRelationFilter, FinancialAnalysisWhereInput>
  }

  export type FinancialPeriodOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    periodStart?: SortOrder
    revenue?: SortOrder
    cogs?: SortOrder
    operatingExpense?: SortOrder
    netIncome?: SortOrder
    currentAssets?: SortOrder
    inventory?: SortOrder
    totalAssets?: SortOrder
    currentLiabilities?: SortOrder
    totalLiabilities?: SortOrder
    equity?: SortOrder
    sourceAnalysisId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    businessProfile?: BusinessProfileOrderByWithRelationInput
    sourceAnalysis?: FinancialAnalysisOrderByWithRelationInput
  }

  export type FinancialPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    businessProfileId_periodStart?: FinancialPeriodBusinessProfileIdPeriodStartCompoundUniqueInput
    AND?: FinancialPeriodWhereInput | FinancialPeriodWhereInput[]
    OR?: FinancialPeriodWhereInput[]
    NOT?: FinancialPeriodWhereInput | FinancialPeriodWhereInput[]
    userId?: UuidFilter<"FinancialPeriod"> | string
    businessProfileId?: UuidFilter<"FinancialPeriod"> | string
    periodStart?: DateTimeFilter<"FinancialPeriod"> | Date | string
    revenue?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    equity?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: UuidFilter<"FinancialPeriod"> | string
    createdAt?: DateTimeFilter<"FinancialPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialPeriod"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    businessProfile?: XOR<BusinessProfileScalarRelationFilter, BusinessProfileWhereInput>
    sourceAnalysis?: XOR<FinancialAnalysisScalarRelationFilter, FinancialAnalysisWhereInput>
  }, "id" | "businessProfileId_periodStart">

  export type FinancialPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    periodStart?: SortOrder
    revenue?: SortOrder
    cogs?: SortOrder
    operatingExpense?: SortOrder
    netIncome?: SortOrder
    currentAssets?: SortOrder
    inventory?: SortOrder
    totalAssets?: SortOrder
    currentLiabilities?: SortOrder
    totalLiabilities?: SortOrder
    equity?: SortOrder
    sourceAnalysisId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinancialPeriodCountOrderByAggregateInput
    _avg?: FinancialPeriodAvgOrderByAggregateInput
    _max?: FinancialPeriodMaxOrderByAggregateInput
    _min?: FinancialPeriodMinOrderByAggregateInput
    _sum?: FinancialPeriodSumOrderByAggregateInput
  }

  export type FinancialPeriodScalarWhereWithAggregatesInput = {
    AND?: FinancialPeriodScalarWhereWithAggregatesInput | FinancialPeriodScalarWhereWithAggregatesInput[]
    OR?: FinancialPeriodScalarWhereWithAggregatesInput[]
    NOT?: FinancialPeriodScalarWhereWithAggregatesInput | FinancialPeriodScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FinancialPeriod"> | string
    userId?: UuidWithAggregatesFilter<"FinancialPeriod"> | string
    businessProfileId?: UuidWithAggregatesFilter<"FinancialPeriod"> | string
    periodStart?: DateTimeWithAggregatesFilter<"FinancialPeriod"> | Date | string
    revenue?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    cogs?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    inventory?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    equity?: DecimalWithAggregatesFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: UuidWithAggregatesFilter<"FinancialPeriod"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FinancialPeriod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinancialPeriod"> | Date | string
  }

  export type AiConsentWhereInput = {
    AND?: AiConsentWhereInput | AiConsentWhereInput[]
    OR?: AiConsentWhereInput[]
    NOT?: AiConsentWhereInput | AiConsentWhereInput[]
    id?: UuidFilter<"AiConsent"> | string
    userId?: UuidFilter<"AiConsent"> | string
    allowContext?: BoolFilter<"AiConsent"> | boolean
    createdAt?: DateTimeFilter<"AiConsent"> | Date | string
    updatedAt?: DateTimeFilter<"AiConsent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AiConsentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    allowContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AiConsentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AiConsentWhereInput | AiConsentWhereInput[]
    OR?: AiConsentWhereInput[]
    NOT?: AiConsentWhereInput | AiConsentWhereInput[]
    allowContext?: BoolFilter<"AiConsent"> | boolean
    createdAt?: DateTimeFilter<"AiConsent"> | Date | string
    updatedAt?: DateTimeFilter<"AiConsent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AiConsentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    allowContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AiConsentCountOrderByAggregateInput
    _max?: AiConsentMaxOrderByAggregateInput
    _min?: AiConsentMinOrderByAggregateInput
  }

  export type AiConsentScalarWhereWithAggregatesInput = {
    AND?: AiConsentScalarWhereWithAggregatesInput | AiConsentScalarWhereWithAggregatesInput[]
    OR?: AiConsentScalarWhereWithAggregatesInput[]
    NOT?: AiConsentScalarWhereWithAggregatesInput | AiConsentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AiConsent"> | string
    userId?: UuidWithAggregatesFilter<"AiConsent"> | string
    allowContext?: BoolWithAggregatesFilter<"AiConsent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AiConsent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiConsent"> | Date | string
  }

  export type AiUsageWhereInput = {
    AND?: AiUsageWhereInput | AiUsageWhereInput[]
    OR?: AiUsageWhereInput[]
    NOT?: AiUsageWhereInput | AiUsageWhereInput[]
    id?: UuidFilter<"AiUsage"> | string
    userId?: UuidFilter<"AiUsage"> | string
    status?: StringFilter<"AiUsage"> | string
    contextUsed?: BoolFilter<"AiUsage"> | boolean
    inputTokens?: IntNullableFilter<"AiUsage"> | number | null
    outputTokens?: IntNullableFilter<"AiUsage"> | number | null
    createdAt?: DateTimeFilter<"AiUsage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AiUsageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    contextUsed?: SortOrder
    inputTokens?: SortOrderInput | SortOrder
    outputTokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AiUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiUsageWhereInput | AiUsageWhereInput[]
    OR?: AiUsageWhereInput[]
    NOT?: AiUsageWhereInput | AiUsageWhereInput[]
    userId?: UuidFilter<"AiUsage"> | string
    status?: StringFilter<"AiUsage"> | string
    contextUsed?: BoolFilter<"AiUsage"> | boolean
    inputTokens?: IntNullableFilter<"AiUsage"> | number | null
    outputTokens?: IntNullableFilter<"AiUsage"> | number | null
    createdAt?: DateTimeFilter<"AiUsage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AiUsageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    contextUsed?: SortOrder
    inputTokens?: SortOrderInput | SortOrder
    outputTokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AiUsageCountOrderByAggregateInput
    _avg?: AiUsageAvgOrderByAggregateInput
    _max?: AiUsageMaxOrderByAggregateInput
    _min?: AiUsageMinOrderByAggregateInput
    _sum?: AiUsageSumOrderByAggregateInput
  }

  export type AiUsageScalarWhereWithAggregatesInput = {
    AND?: AiUsageScalarWhereWithAggregatesInput | AiUsageScalarWhereWithAggregatesInput[]
    OR?: AiUsageScalarWhereWithAggregatesInput[]
    NOT?: AiUsageScalarWhereWithAggregatesInput | AiUsageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AiUsage"> | string
    userId?: UuidWithAggregatesFilter<"AiUsage"> | string
    status?: StringWithAggregatesFilter<"AiUsage"> | string
    contextUsed?: BoolWithAggregatesFilter<"AiUsage"> | boolean
    inputTokens?: IntNullableWithAggregatesFilter<"AiUsage"> | number | null
    outputTokens?: IntNullableWithAggregatesFilter<"AiUsage"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AiUsage"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: UuidFilter<"ChatMessage"> | string
    userId?: UuidFilter<"ChatMessage"> | string
    role?: EnumChatRoleFilter<"ChatMessage"> | $Enums.ChatRole
    content?: StringFilter<"ChatMessage"> | string
    contextUsed?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    contextUsed?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    userId?: UuidFilter<"ChatMessage"> | string
    role?: EnumChatRoleFilter<"ChatMessage"> | $Enums.ChatRole
    content?: StringFilter<"ChatMessage"> | string
    contextUsed?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    contextUsed?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChatMessage"> | string
    userId?: UuidWithAggregatesFilter<"ChatMessage"> | string
    role?: EnumChatRoleWithAggregatesFilter<"ChatMessage"> | $Enums.ChatRole
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    contextUsed?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: BigIntFilter<"ActivityLog"> | bigint | number
    userId?: UuidNullableFilter<"ActivityLog"> | string | null
    eventType?: StringFilter<"ActivityLog"> | string
    level?: EnumLogLevelFilter<"ActivityLog"> | $Enums.LogLevel
    component?: StringNullableFilter<"ActivityLog"> | string | null
    errorCode?: StringNullableFilter<"ActivityLog"> | string | null
    message?: StringFilter<"ActivityLog"> | string
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    level?: SortOrder
    component?: SortOrderInput | SortOrder
    errorCode?: SortOrderInput | SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: UuidNullableFilter<"ActivityLog"> | string | null
    eventType?: StringFilter<"ActivityLog"> | string
    level?: EnumLogLevelFilter<"ActivityLog"> | $Enums.LogLevel
    component?: StringNullableFilter<"ActivityLog"> | string | null
    errorCode?: StringNullableFilter<"ActivityLog"> | string | null
    message?: StringFilter<"ActivityLog"> | string
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    level?: SortOrder
    component?: SortOrderInput | SortOrder
    errorCode?: SortOrderInput | SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ActivityLog"> | bigint | number
    userId?: UuidNullableWithAggregatesFilter<"ActivityLog"> | string | null
    eventType?: StringWithAggregatesFilter<"ActivityLog"> | string
    level?: EnumLogLevelWithAggregatesFilter<"ActivityLog"> | $Enums.LogLevel
    component?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    errorCode?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    message?: StringWithAggregatesFilter<"ActivityLog"> | string
    metadata?: JsonNullableWithAggregatesFilter<"ActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentUncheckedCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUncheckedUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessProfileCreateInput = {
    id?: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBusinessProfileInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutBusinessProfileInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutBusinessProfileInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusinessProfileNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutBusinessProfileNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutBusinessProfileNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutBusinessProfileNestedInput
  }

  export type BusinessProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutBusinessProfileNestedInput
  }

  export type BusinessProfileCreateManyInput = {
    id?: string
    userId: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisConfigCreateInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedConfigsInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutConfigInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutConfigInput
  }

  export type AnalysisConfigUncheckedCreateInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutConfigInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutConfigInput
  }

  export type AnalysisConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedConfigsNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutConfigNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutConfigNestedInput
  }

  export type AnalysisConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutConfigNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type AnalysisConfigCreateManyInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnalysisConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAnalysisCreateInput = {
    id?: string
    code: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLocationAnalysesInput
    businessProfile: BusinessProfileCreateNestedOneWithoutLocationAnalysesInput
    config: AnalysisConfigCreateNestedOneWithoutLocationAnalysesInput
  }

  export type LocationAnalysisUncheckedCreateInput = {
    id?: string
    code: string
    userId: string
    businessProfileId: string
    configId: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LocationAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationAnalysesNestedInput
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutLocationAnalysesNestedInput
    config?: AnalysisConfigUpdateOneRequiredWithoutLocationAnalysesNestedInput
  }

  export type LocationAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAnalysisCreateManyInput = {
    id?: string
    code: string
    userId: string
    businessProfileId: string
    configId: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LocationAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisCreateInput = {
    id?: string
    code: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFinancialAnalysesInput
    businessProfile: BusinessProfileCreateNestedOneWithoutFinancialAnalysesInput
    config: AnalysisConfigCreateNestedOneWithoutFinancialAnalysesInput
    periods?: FinancialPeriodCreateNestedManyWithoutSourceAnalysisInput
  }

  export type FinancialAnalysisUncheckedCreateInput = {
    id?: string
    code: string
    userId: string
    businessProfileId: string
    configId: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
    periods?: FinancialPeriodUncheckedCreateNestedManyWithoutSourceAnalysisInput
  }

  export type FinancialAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    config?: AnalysisConfigUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    periods?: FinancialPeriodUpdateManyWithoutSourceAnalysisNestedInput
  }

  export type FinancialAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    periods?: FinancialPeriodUncheckedUpdateManyWithoutSourceAnalysisNestedInput
  }

  export type FinancialAnalysisCreateManyInput = {
    id?: string
    code: string
    userId: string
    businessProfileId: string
    configId: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
  }

  export type FinancialAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialPeriodCreateInput = {
    id?: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinancialPeriodsInput
    businessProfile: BusinessProfileCreateNestedOneWithoutFinancialPeriodsInput
    sourceAnalysis: FinancialAnalysisCreateNestedOneWithoutPeriodsInput
  }

  export type FinancialPeriodUncheckedCreateInput = {
    id?: string
    userId: string
    businessProfileId: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    sourceAnalysisId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialPeriodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinancialPeriodsNestedInput
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutFinancialPeriodsNestedInput
    sourceAnalysis?: FinancialAnalysisUpdateOneRequiredWithoutPeriodsNestedInput
  }

  export type FinancialPeriodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialPeriodCreateManyInput = {
    id?: string
    userId: string
    businessProfileId: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    sourceAnalysisId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialPeriodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialPeriodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiConsentCreateInput = {
    id?: string
    allowContext?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAiConsentInput
  }

  export type AiConsentUncheckedCreateInput = {
    id?: string
    userId: string
    allowContext?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiConsentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowContext?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiConsentNestedInput
  }

  export type AiConsentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allowContext?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiConsentCreateManyInput = {
    id?: string
    userId: string
    allowContext?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiConsentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowContext?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiConsentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allowContext?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageCreateInput = {
    id?: string
    status: string
    contextUsed: boolean
    inputTokens?: number | null
    outputTokens?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiUsagesInput
  }

  export type AiUsageUncheckedCreateInput = {
    id?: string
    userId: string
    status: string
    contextUsed: boolean
    inputTokens?: number | null
    outputTokens?: number | null
    createdAt?: Date | string
  }

  export type AiUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiUsagesNestedInput
  }

  export type AiUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageCreateManyInput = {
    id?: string
    userId: string
    status: string
    contextUsed: boolean
    inputTokens?: number | null
    outputTokens?: number | null
    createdAt?: Date | string
  }

  export type AiUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: $Enums.ChatRole
    content: string
    contextUsed?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    userId: string
    role: $Enums.ChatRole
    content: string
    contextUsed?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    userId: string
    role: $Enums.ChatRole
    content: string
    contextUsed?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: bigint | number
    eventType: string
    level?: $Enums.LogLevel
    component?: string | null
    errorCode?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: bigint | number
    userId?: string | null
    eventType: string
    level?: $Enums.LogLevel
    component?: string | null
    errorCode?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    component?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    component?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: bigint | number
    userId?: string | null
    eventType: string
    level?: $Enums.LogLevel
    component?: string | null
    errorCode?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    component?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    component?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BusinessProfileNullableScalarRelationFilter = {
    is?: BusinessProfileWhereInput | null
    isNot?: BusinessProfileWhereInput | null
  }

  export type LocationAnalysisListRelationFilter = {
    every?: LocationAnalysisWhereInput
    some?: LocationAnalysisWhereInput
    none?: LocationAnalysisWhereInput
  }

  export type FinancialAnalysisListRelationFilter = {
    every?: FinancialAnalysisWhereInput
    some?: FinancialAnalysisWhereInput
    none?: FinancialAnalysisWhereInput
  }

  export type FinancialPeriodListRelationFilter = {
    every?: FinancialPeriodWhereInput
    some?: FinancialPeriodWhereInput
    none?: FinancialPeriodWhereInput
  }

  export type AiConsentNullableScalarRelationFilter = {
    is?: AiConsentWhereInput | null
    isNot?: AiConsentWhereInput | null
  }

  export type AiUsageListRelationFilter = {
    every?: AiUsageWhereInput
    some?: AiUsageWhereInput
    none?: AiUsageWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type AnalysisConfigListRelationFilter = {
    every?: AnalysisConfigWhereInput
    some?: AnalysisConfigWhereInput
    none?: AnalysisConfigWhereInput
  }

  export type LocationAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialPeriodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalysisConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BusinessProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    sectorOther?: SortOrder
    address?: SortOrder
    quarterlyRevenueTarget?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessProfileAvgOrderByAggregateInput = {
    quarterlyRevenueTarget?: SortOrder
  }

  export type BusinessProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    sectorOther?: SortOrder
    address?: SortOrder
    quarterlyRevenueTarget?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    sector?: SortOrder
    sectorOther?: SortOrder
    address?: SortOrder
    quarterlyRevenueTarget?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessProfileSumOrderByAggregateInput = {
    quarterlyRevenueTarget?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumConfigModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfigModule | EnumConfigModuleFieldRefInput<$PrismaModel>
    in?: $Enums.ConfigModule[] | ListEnumConfigModuleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfigModule[] | ListEnumConfigModuleFieldRefInput<$PrismaModel>
    not?: NestedEnumConfigModuleFilter<$PrismaModel> | $Enums.ConfigModule
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AnalysisConfigModuleVersionNumberCompoundUniqueInput = {
    module: $Enums.ConfigModule
    versionNumber: number
  }

  export type AnalysisConfigCountOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    versionNumber?: SortOrder
    isActive?: SortOrder
    parameters?: SortOrder
    note?: SortOrder
    createdById?: SortOrder
    activatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisConfigAvgOrderByAggregateInput = {
    versionNumber?: SortOrder
  }

  export type AnalysisConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    versionNumber?: SortOrder
    isActive?: SortOrder
    note?: SortOrder
    createdById?: SortOrder
    activatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisConfigMinOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    versionNumber?: SortOrder
    isActive?: SortOrder
    note?: SortOrder
    createdById?: SortOrder
    activatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisConfigSumOrderByAggregateInput = {
    versionNumber?: SortOrder
  }

  export type EnumConfigModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfigModule | EnumConfigModuleFieldRefInput<$PrismaModel>
    in?: $Enums.ConfigModule[] | ListEnumConfigModuleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfigModule[] | ListEnumConfigModuleFieldRefInput<$PrismaModel>
    not?: NestedEnumConfigModuleWithAggregatesFilter<$PrismaModel> | $Enums.ConfigModule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConfigModuleFilter<$PrismaModel>
    _max?: NestedEnumConfigModuleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumLocationCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationCategory | EnumLocationCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LocationCategory[] | ListEnumLocationCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationCategory[] | ListEnumLocationCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationCategoryFilter<$PrismaModel> | $Enums.LocationCategory
  }

  export type BusinessProfileScalarRelationFilter = {
    is?: BusinessProfileWhereInput
    isNot?: BusinessProfileWhereInput
  }

  export type AnalysisConfigScalarRelationFilter = {
    is?: AnalysisConfigWhereInput
    isNot?: AnalysisConfigWhereInput
  }

  export type LocationAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    locationName?: SortOrder
    district?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rentCost?: SortOrder
    competitorCount?: SortOrder
    accessibility?: SortOrder
    marketPotential?: SortOrder
    score?: SortOrder
    category?: SortOrder
    details?: SortOrder
    strongestFactor?: SortOrder
    weakestFactor?: SortOrder
    warnings?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAnalysisAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    rentCost?: SortOrder
    competitorCount?: SortOrder
    accessibility?: SortOrder
    marketPotential?: SortOrder
    score?: SortOrder
  }

  export type LocationAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    locationName?: SortOrder
    district?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rentCost?: SortOrder
    competitorCount?: SortOrder
    accessibility?: SortOrder
    marketPotential?: SortOrder
    score?: SortOrder
    category?: SortOrder
    strongestFactor?: SortOrder
    weakestFactor?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    locationName?: SortOrder
    district?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rentCost?: SortOrder
    competitorCount?: SortOrder
    accessibility?: SortOrder
    marketPotential?: SortOrder
    score?: SortOrder
    category?: SortOrder
    strongestFactor?: SortOrder
    weakestFactor?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAnalysisSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    rentCost?: SortOrder
    competitorCount?: SortOrder
    accessibility?: SortOrder
    marketPotential?: SortOrder
    score?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumLocationCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationCategory | EnumLocationCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LocationCategory[] | ListEnumLocationCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationCategory[] | ListEnumLocationCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationCategoryWithAggregatesFilter<$PrismaModel> | $Enums.LocationCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationCategoryFilter<$PrismaModel>
    _max?: NestedEnumLocationCategoryFilter<$PrismaModel>
  }

  export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type FinancialAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    fileName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodsAnalyzed?: SortOrder
    ratios?: SortOrder
    ruleResults?: SortOrder
    patterns?: SortOrder
    excludedRules?: SortOrder
    warnings?: SortOrder
    riskIndex?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialAnalysisAvgOrderByAggregateInput = {
    periodsAnalyzed?: SortOrder
    riskIndex?: SortOrder
  }

  export type FinancialAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    fileName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodsAnalyzed?: SortOrder
    riskIndex?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    configId?: SortOrder
    fileName?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    periodsAnalyzed?: SortOrder
    riskIndex?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialAnalysisSumOrderByAggregateInput = {
    periodsAnalyzed?: SortOrder
    riskIndex?: SortOrder
  }

  export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type FinancialAnalysisScalarRelationFilter = {
    is?: FinancialAnalysisWhereInput
    isNot?: FinancialAnalysisWhereInput
  }

  export type FinancialPeriodBusinessProfileIdPeriodStartCompoundUniqueInput = {
    businessProfileId: string
    periodStart: Date | string
  }

  export type FinancialPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    periodStart?: SortOrder
    revenue?: SortOrder
    cogs?: SortOrder
    operatingExpense?: SortOrder
    netIncome?: SortOrder
    currentAssets?: SortOrder
    inventory?: SortOrder
    totalAssets?: SortOrder
    currentLiabilities?: SortOrder
    totalLiabilities?: SortOrder
    equity?: SortOrder
    sourceAnalysisId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialPeriodAvgOrderByAggregateInput = {
    revenue?: SortOrder
    cogs?: SortOrder
    operatingExpense?: SortOrder
    netIncome?: SortOrder
    currentAssets?: SortOrder
    inventory?: SortOrder
    totalAssets?: SortOrder
    currentLiabilities?: SortOrder
    totalLiabilities?: SortOrder
    equity?: SortOrder
  }

  export type FinancialPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    periodStart?: SortOrder
    revenue?: SortOrder
    cogs?: SortOrder
    operatingExpense?: SortOrder
    netIncome?: SortOrder
    currentAssets?: SortOrder
    inventory?: SortOrder
    totalAssets?: SortOrder
    currentLiabilities?: SortOrder
    totalLiabilities?: SortOrder
    equity?: SortOrder
    sourceAnalysisId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessProfileId?: SortOrder
    periodStart?: SortOrder
    revenue?: SortOrder
    cogs?: SortOrder
    operatingExpense?: SortOrder
    netIncome?: SortOrder
    currentAssets?: SortOrder
    inventory?: SortOrder
    totalAssets?: SortOrder
    currentLiabilities?: SortOrder
    totalLiabilities?: SortOrder
    equity?: SortOrder
    sourceAnalysisId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialPeriodSumOrderByAggregateInput = {
    revenue?: SortOrder
    cogs?: SortOrder
    operatingExpense?: SortOrder
    netIncome?: SortOrder
    currentAssets?: SortOrder
    inventory?: SortOrder
    totalAssets?: SortOrder
    currentLiabilities?: SortOrder
    totalLiabilities?: SortOrder
    equity?: SortOrder
  }

  export type AiConsentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allowContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiConsentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allowContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiConsentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allowContext?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AiUsageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    contextUsed?: SortOrder
    inputTokens?: SortOrder
    outputTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type AiUsageAvgOrderByAggregateInput = {
    inputTokens?: SortOrder
    outputTokens?: SortOrder
  }

  export type AiUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    contextUsed?: SortOrder
    inputTokens?: SortOrder
    outputTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type AiUsageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    contextUsed?: SortOrder
    inputTokens?: SortOrder
    outputTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type AiUsageSumOrderByAggregateInput = {
    inputTokens?: SortOrder
    outputTokens?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumChatRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleFilter<$PrismaModel> | $Enums.ChatRole
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    contextUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    contextUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    contextUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumChatRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChatRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatRoleFilter<$PrismaModel>
    _max?: NestedEnumChatRoleFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumLogLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLogLevelFilter<$PrismaModel> | $Enums.LogLevel
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    level?: SortOrder
    component?: SortOrder
    errorCode?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    level?: SortOrder
    component?: SortOrder
    errorCode?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    level?: SortOrder
    component?: SortOrder
    errorCode?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumLogLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLogLevelWithAggregatesFilter<$PrismaModel> | $Enums.LogLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogLevelFilter<$PrismaModel>
    _max?: NestedEnumLogLevelFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BusinessProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutUserInput
    connect?: BusinessProfileWhereUniqueInput
  }

  export type LocationAnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<LocationAnalysisCreateWithoutUserInput, LocationAnalysisUncheckedCreateWithoutUserInput> | LocationAnalysisCreateWithoutUserInput[] | LocationAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutUserInput | LocationAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: LocationAnalysisCreateManyUserInputEnvelope
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
  }

  export type FinancialAnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput> | FinancialAnalysisCreateWithoutUserInput[] | FinancialAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutUserInput | FinancialAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: FinancialAnalysisCreateManyUserInputEnvelope
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
  }

  export type FinancialPeriodCreateNestedManyWithoutUserInput = {
    create?: XOR<FinancialPeriodCreateWithoutUserInput, FinancialPeriodUncheckedCreateWithoutUserInput> | FinancialPeriodCreateWithoutUserInput[] | FinancialPeriodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutUserInput | FinancialPeriodCreateOrConnectWithoutUserInput[]
    createMany?: FinancialPeriodCreateManyUserInputEnvelope
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
  }

  export type AiConsentCreateNestedOneWithoutUserInput = {
    create?: XOR<AiConsentCreateWithoutUserInput, AiConsentUncheckedCreateWithoutUserInput>
    connectOrCreate?: AiConsentCreateOrConnectWithoutUserInput
    connect?: AiConsentWhereUniqueInput
  }

  export type AiUsageCreateNestedManyWithoutUserInput = {
    create?: XOR<AiUsageCreateWithoutUserInput, AiUsageUncheckedCreateWithoutUserInput> | AiUsageCreateWithoutUserInput[] | AiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutUserInput | AiUsageCreateOrConnectWithoutUserInput[]
    createMany?: AiUsageCreateManyUserInputEnvelope
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type AnalysisConfigCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AnalysisConfigCreateWithoutCreatedByInput, AnalysisConfigUncheckedCreateWithoutCreatedByInput> | AnalysisConfigCreateWithoutCreatedByInput[] | AnalysisConfigUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnalysisConfigCreateOrConnectWithoutCreatedByInput | AnalysisConfigCreateOrConnectWithoutCreatedByInput[]
    createMany?: AnalysisConfigCreateManyCreatedByInputEnvelope
    connect?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
  }

  export type BusinessProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutUserInput
    connect?: BusinessProfileWhereUniqueInput
  }

  export type LocationAnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LocationAnalysisCreateWithoutUserInput, LocationAnalysisUncheckedCreateWithoutUserInput> | LocationAnalysisCreateWithoutUserInput[] | LocationAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutUserInput | LocationAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: LocationAnalysisCreateManyUserInputEnvelope
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
  }

  export type FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput> | FinancialAnalysisCreateWithoutUserInput[] | FinancialAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutUserInput | FinancialAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: FinancialAnalysisCreateManyUserInputEnvelope
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
  }

  export type FinancialPeriodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FinancialPeriodCreateWithoutUserInput, FinancialPeriodUncheckedCreateWithoutUserInput> | FinancialPeriodCreateWithoutUserInput[] | FinancialPeriodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutUserInput | FinancialPeriodCreateOrConnectWithoutUserInput[]
    createMany?: FinancialPeriodCreateManyUserInputEnvelope
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
  }

  export type AiConsentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AiConsentCreateWithoutUserInput, AiConsentUncheckedCreateWithoutUserInput>
    connectOrCreate?: AiConsentCreateOrConnectWithoutUserInput
    connect?: AiConsentWhereUniqueInput
  }

  export type AiUsageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiUsageCreateWithoutUserInput, AiUsageUncheckedCreateWithoutUserInput> | AiUsageCreateWithoutUserInput[] | AiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutUserInput | AiUsageCreateOrConnectWithoutUserInput[]
    createMany?: AiUsageCreateManyUserInputEnvelope
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AnalysisConfigCreateWithoutCreatedByInput, AnalysisConfigUncheckedCreateWithoutCreatedByInput> | AnalysisConfigCreateWithoutCreatedByInput[] | AnalysisConfigUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnalysisConfigCreateOrConnectWithoutCreatedByInput | AnalysisConfigCreateOrConnectWithoutCreatedByInput[]
    createMany?: AnalysisConfigCreateManyCreatedByInputEnvelope
    connect?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BusinessProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutUserInput
    upsert?: BusinessProfileUpsertWithoutUserInput
    disconnect?: BusinessProfileWhereInput | boolean
    delete?: BusinessProfileWhereInput | boolean
    connect?: BusinessProfileWhereUniqueInput
    update?: XOR<XOR<BusinessProfileUpdateToOneWithWhereWithoutUserInput, BusinessProfileUpdateWithoutUserInput>, BusinessProfileUncheckedUpdateWithoutUserInput>
  }

  export type LocationAnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<LocationAnalysisCreateWithoutUserInput, LocationAnalysisUncheckedCreateWithoutUserInput> | LocationAnalysisCreateWithoutUserInput[] | LocationAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutUserInput | LocationAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: LocationAnalysisUpsertWithWhereUniqueWithoutUserInput | LocationAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LocationAnalysisCreateManyUserInputEnvelope
    set?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    disconnect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    delete?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    update?: LocationAnalysisUpdateWithWhereUniqueWithoutUserInput | LocationAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LocationAnalysisUpdateManyWithWhereWithoutUserInput | LocationAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LocationAnalysisScalarWhereInput | LocationAnalysisScalarWhereInput[]
  }

  export type FinancialAnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput> | FinancialAnalysisCreateWithoutUserInput[] | FinancialAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutUserInput | FinancialAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput | FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinancialAnalysisCreateManyUserInputEnvelope
    set?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    disconnect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    delete?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    update?: FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput | FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinancialAnalysisUpdateManyWithWhereWithoutUserInput | FinancialAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
  }

  export type FinancialPeriodUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinancialPeriodCreateWithoutUserInput, FinancialPeriodUncheckedCreateWithoutUserInput> | FinancialPeriodCreateWithoutUserInput[] | FinancialPeriodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutUserInput | FinancialPeriodCreateOrConnectWithoutUserInput[]
    upsert?: FinancialPeriodUpsertWithWhereUniqueWithoutUserInput | FinancialPeriodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinancialPeriodCreateManyUserInputEnvelope
    set?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    disconnect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    delete?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    update?: FinancialPeriodUpdateWithWhereUniqueWithoutUserInput | FinancialPeriodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinancialPeriodUpdateManyWithWhereWithoutUserInput | FinancialPeriodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinancialPeriodScalarWhereInput | FinancialPeriodScalarWhereInput[]
  }

  export type AiConsentUpdateOneWithoutUserNestedInput = {
    create?: XOR<AiConsentCreateWithoutUserInput, AiConsentUncheckedCreateWithoutUserInput>
    connectOrCreate?: AiConsentCreateOrConnectWithoutUserInput
    upsert?: AiConsentUpsertWithoutUserInput
    disconnect?: AiConsentWhereInput | boolean
    delete?: AiConsentWhereInput | boolean
    connect?: AiConsentWhereUniqueInput
    update?: XOR<XOR<AiConsentUpdateToOneWithWhereWithoutUserInput, AiConsentUpdateWithoutUserInput>, AiConsentUncheckedUpdateWithoutUserInput>
  }

  export type AiUsageUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiUsageCreateWithoutUserInput, AiUsageUncheckedCreateWithoutUserInput> | AiUsageCreateWithoutUserInput[] | AiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutUserInput | AiUsageCreateOrConnectWithoutUserInput[]
    upsert?: AiUsageUpsertWithWhereUniqueWithoutUserInput | AiUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiUsageCreateManyUserInputEnvelope
    set?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    disconnect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    delete?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    update?: AiUsageUpdateWithWhereUniqueWithoutUserInput | AiUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiUsageUpdateManyWithWhereWithoutUserInput | AiUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type AnalysisConfigUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AnalysisConfigCreateWithoutCreatedByInput, AnalysisConfigUncheckedCreateWithoutCreatedByInput> | AnalysisConfigCreateWithoutCreatedByInput[] | AnalysisConfigUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnalysisConfigCreateOrConnectWithoutCreatedByInput | AnalysisConfigCreateOrConnectWithoutCreatedByInput[]
    upsert?: AnalysisConfigUpsertWithWhereUniqueWithoutCreatedByInput | AnalysisConfigUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AnalysisConfigCreateManyCreatedByInputEnvelope
    set?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
    disconnect?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
    delete?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
    connect?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
    update?: AnalysisConfigUpdateWithWhereUniqueWithoutCreatedByInput | AnalysisConfigUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AnalysisConfigUpdateManyWithWhereWithoutCreatedByInput | AnalysisConfigUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AnalysisConfigScalarWhereInput | AnalysisConfigScalarWhereInput[]
  }

  export type BusinessProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutUserInput
    upsert?: BusinessProfileUpsertWithoutUserInput
    disconnect?: BusinessProfileWhereInput | boolean
    delete?: BusinessProfileWhereInput | boolean
    connect?: BusinessProfileWhereUniqueInput
    update?: XOR<XOR<BusinessProfileUpdateToOneWithWhereWithoutUserInput, BusinessProfileUpdateWithoutUserInput>, BusinessProfileUncheckedUpdateWithoutUserInput>
  }

  export type LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LocationAnalysisCreateWithoutUserInput, LocationAnalysisUncheckedCreateWithoutUserInput> | LocationAnalysisCreateWithoutUserInput[] | LocationAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutUserInput | LocationAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: LocationAnalysisUpsertWithWhereUniqueWithoutUserInput | LocationAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LocationAnalysisCreateManyUserInputEnvelope
    set?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    disconnect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    delete?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    update?: LocationAnalysisUpdateWithWhereUniqueWithoutUserInput | LocationAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LocationAnalysisUpdateManyWithWhereWithoutUserInput | LocationAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LocationAnalysisScalarWhereInput | LocationAnalysisScalarWhereInput[]
  }

  export type FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput> | FinancialAnalysisCreateWithoutUserInput[] | FinancialAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutUserInput | FinancialAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput | FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinancialAnalysisCreateManyUserInputEnvelope
    set?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    disconnect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    delete?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    update?: FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput | FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinancialAnalysisUpdateManyWithWhereWithoutUserInput | FinancialAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
  }

  export type FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinancialPeriodCreateWithoutUserInput, FinancialPeriodUncheckedCreateWithoutUserInput> | FinancialPeriodCreateWithoutUserInput[] | FinancialPeriodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutUserInput | FinancialPeriodCreateOrConnectWithoutUserInput[]
    upsert?: FinancialPeriodUpsertWithWhereUniqueWithoutUserInput | FinancialPeriodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinancialPeriodCreateManyUserInputEnvelope
    set?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    disconnect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    delete?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    update?: FinancialPeriodUpdateWithWhereUniqueWithoutUserInput | FinancialPeriodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinancialPeriodUpdateManyWithWhereWithoutUserInput | FinancialPeriodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinancialPeriodScalarWhereInput | FinancialPeriodScalarWhereInput[]
  }

  export type AiConsentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AiConsentCreateWithoutUserInput, AiConsentUncheckedCreateWithoutUserInput>
    connectOrCreate?: AiConsentCreateOrConnectWithoutUserInput
    upsert?: AiConsentUpsertWithoutUserInput
    disconnect?: AiConsentWhereInput | boolean
    delete?: AiConsentWhereInput | boolean
    connect?: AiConsentWhereUniqueInput
    update?: XOR<XOR<AiConsentUpdateToOneWithWhereWithoutUserInput, AiConsentUpdateWithoutUserInput>, AiConsentUncheckedUpdateWithoutUserInput>
  }

  export type AiUsageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiUsageCreateWithoutUserInput, AiUsageUncheckedCreateWithoutUserInput> | AiUsageCreateWithoutUserInput[] | AiUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutUserInput | AiUsageCreateOrConnectWithoutUserInput[]
    upsert?: AiUsageUpsertWithWhereUniqueWithoutUserInput | AiUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiUsageCreateManyUserInputEnvelope
    set?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    disconnect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    delete?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    update?: AiUsageUpdateWithWhereUniqueWithoutUserInput | AiUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiUsageUpdateManyWithWhereWithoutUserInput | AiUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AnalysisConfigCreateWithoutCreatedByInput, AnalysisConfigUncheckedCreateWithoutCreatedByInput> | AnalysisConfigCreateWithoutCreatedByInput[] | AnalysisConfigUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnalysisConfigCreateOrConnectWithoutCreatedByInput | AnalysisConfigCreateOrConnectWithoutCreatedByInput[]
    upsert?: AnalysisConfigUpsertWithWhereUniqueWithoutCreatedByInput | AnalysisConfigUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AnalysisConfigCreateManyCreatedByInputEnvelope
    set?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
    disconnect?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
    delete?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
    connect?: AnalysisConfigWhereUniqueInput | AnalysisConfigWhereUniqueInput[]
    update?: AnalysisConfigUpdateWithWhereUniqueWithoutCreatedByInput | AnalysisConfigUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AnalysisConfigUpdateManyWithWhereWithoutCreatedByInput | AnalysisConfigUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AnalysisConfigScalarWhereInput | AnalysisConfigScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBusinessProfileInput = {
    create?: XOR<UserCreateWithoutBusinessProfileInput, UserUncheckedCreateWithoutBusinessProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessProfileInput
    connect?: UserWhereUniqueInput
  }

  export type LocationAnalysisCreateNestedManyWithoutBusinessProfileInput = {
    create?: XOR<LocationAnalysisCreateWithoutBusinessProfileInput, LocationAnalysisUncheckedCreateWithoutBusinessProfileInput> | LocationAnalysisCreateWithoutBusinessProfileInput[] | LocationAnalysisUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutBusinessProfileInput | LocationAnalysisCreateOrConnectWithoutBusinessProfileInput[]
    createMany?: LocationAnalysisCreateManyBusinessProfileInputEnvelope
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
  }

  export type FinancialAnalysisCreateNestedManyWithoutBusinessProfileInput = {
    create?: XOR<FinancialAnalysisCreateWithoutBusinessProfileInput, FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput> | FinancialAnalysisCreateWithoutBusinessProfileInput[] | FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutBusinessProfileInput | FinancialAnalysisCreateOrConnectWithoutBusinessProfileInput[]
    createMany?: FinancialAnalysisCreateManyBusinessProfileInputEnvelope
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
  }

  export type FinancialPeriodCreateNestedManyWithoutBusinessProfileInput = {
    create?: XOR<FinancialPeriodCreateWithoutBusinessProfileInput, FinancialPeriodUncheckedCreateWithoutBusinessProfileInput> | FinancialPeriodCreateWithoutBusinessProfileInput[] | FinancialPeriodUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutBusinessProfileInput | FinancialPeriodCreateOrConnectWithoutBusinessProfileInput[]
    createMany?: FinancialPeriodCreateManyBusinessProfileInputEnvelope
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
  }

  export type LocationAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput = {
    create?: XOR<LocationAnalysisCreateWithoutBusinessProfileInput, LocationAnalysisUncheckedCreateWithoutBusinessProfileInput> | LocationAnalysisCreateWithoutBusinessProfileInput[] | LocationAnalysisUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutBusinessProfileInput | LocationAnalysisCreateOrConnectWithoutBusinessProfileInput[]
    createMany?: LocationAnalysisCreateManyBusinessProfileInputEnvelope
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
  }

  export type FinancialAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput = {
    create?: XOR<FinancialAnalysisCreateWithoutBusinessProfileInput, FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput> | FinancialAnalysisCreateWithoutBusinessProfileInput[] | FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutBusinessProfileInput | FinancialAnalysisCreateOrConnectWithoutBusinessProfileInput[]
    createMany?: FinancialAnalysisCreateManyBusinessProfileInputEnvelope
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
  }

  export type FinancialPeriodUncheckedCreateNestedManyWithoutBusinessProfileInput = {
    create?: XOR<FinancialPeriodCreateWithoutBusinessProfileInput, FinancialPeriodUncheckedCreateWithoutBusinessProfileInput> | FinancialPeriodCreateWithoutBusinessProfileInput[] | FinancialPeriodUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutBusinessProfileInput | FinancialPeriodCreateOrConnectWithoutBusinessProfileInput[]
    createMany?: FinancialPeriodCreateManyBusinessProfileInputEnvelope
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutBusinessProfileNestedInput = {
    create?: XOR<UserCreateWithoutBusinessProfileInput, UserUncheckedCreateWithoutBusinessProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessProfileInput
    upsert?: UserUpsertWithoutBusinessProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusinessProfileInput, UserUpdateWithoutBusinessProfileInput>, UserUncheckedUpdateWithoutBusinessProfileInput>
  }

  export type LocationAnalysisUpdateManyWithoutBusinessProfileNestedInput = {
    create?: XOR<LocationAnalysisCreateWithoutBusinessProfileInput, LocationAnalysisUncheckedCreateWithoutBusinessProfileInput> | LocationAnalysisCreateWithoutBusinessProfileInput[] | LocationAnalysisUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutBusinessProfileInput | LocationAnalysisCreateOrConnectWithoutBusinessProfileInput[]
    upsert?: LocationAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput | LocationAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput[]
    createMany?: LocationAnalysisCreateManyBusinessProfileInputEnvelope
    set?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    disconnect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    delete?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    update?: LocationAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput | LocationAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput[]
    updateMany?: LocationAnalysisUpdateManyWithWhereWithoutBusinessProfileInput | LocationAnalysisUpdateManyWithWhereWithoutBusinessProfileInput[]
    deleteMany?: LocationAnalysisScalarWhereInput | LocationAnalysisScalarWhereInput[]
  }

  export type FinancialAnalysisUpdateManyWithoutBusinessProfileNestedInput = {
    create?: XOR<FinancialAnalysisCreateWithoutBusinessProfileInput, FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput> | FinancialAnalysisCreateWithoutBusinessProfileInput[] | FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutBusinessProfileInput | FinancialAnalysisCreateOrConnectWithoutBusinessProfileInput[]
    upsert?: FinancialAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput | FinancialAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput[]
    createMany?: FinancialAnalysisCreateManyBusinessProfileInputEnvelope
    set?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    disconnect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    delete?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    update?: FinancialAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput | FinancialAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput[]
    updateMany?: FinancialAnalysisUpdateManyWithWhereWithoutBusinessProfileInput | FinancialAnalysisUpdateManyWithWhereWithoutBusinessProfileInput[]
    deleteMany?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
  }

  export type FinancialPeriodUpdateManyWithoutBusinessProfileNestedInput = {
    create?: XOR<FinancialPeriodCreateWithoutBusinessProfileInput, FinancialPeriodUncheckedCreateWithoutBusinessProfileInput> | FinancialPeriodCreateWithoutBusinessProfileInput[] | FinancialPeriodUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutBusinessProfileInput | FinancialPeriodCreateOrConnectWithoutBusinessProfileInput[]
    upsert?: FinancialPeriodUpsertWithWhereUniqueWithoutBusinessProfileInput | FinancialPeriodUpsertWithWhereUniqueWithoutBusinessProfileInput[]
    createMany?: FinancialPeriodCreateManyBusinessProfileInputEnvelope
    set?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    disconnect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    delete?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    update?: FinancialPeriodUpdateWithWhereUniqueWithoutBusinessProfileInput | FinancialPeriodUpdateWithWhereUniqueWithoutBusinessProfileInput[]
    updateMany?: FinancialPeriodUpdateManyWithWhereWithoutBusinessProfileInput | FinancialPeriodUpdateManyWithWhereWithoutBusinessProfileInput[]
    deleteMany?: FinancialPeriodScalarWhereInput | FinancialPeriodScalarWhereInput[]
  }

  export type LocationAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput = {
    create?: XOR<LocationAnalysisCreateWithoutBusinessProfileInput, LocationAnalysisUncheckedCreateWithoutBusinessProfileInput> | LocationAnalysisCreateWithoutBusinessProfileInput[] | LocationAnalysisUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutBusinessProfileInput | LocationAnalysisCreateOrConnectWithoutBusinessProfileInput[]
    upsert?: LocationAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput | LocationAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput[]
    createMany?: LocationAnalysisCreateManyBusinessProfileInputEnvelope
    set?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    disconnect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    delete?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    update?: LocationAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput | LocationAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput[]
    updateMany?: LocationAnalysisUpdateManyWithWhereWithoutBusinessProfileInput | LocationAnalysisUpdateManyWithWhereWithoutBusinessProfileInput[]
    deleteMany?: LocationAnalysisScalarWhereInput | LocationAnalysisScalarWhereInput[]
  }

  export type FinancialAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput = {
    create?: XOR<FinancialAnalysisCreateWithoutBusinessProfileInput, FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput> | FinancialAnalysisCreateWithoutBusinessProfileInput[] | FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutBusinessProfileInput | FinancialAnalysisCreateOrConnectWithoutBusinessProfileInput[]
    upsert?: FinancialAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput | FinancialAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput[]
    createMany?: FinancialAnalysisCreateManyBusinessProfileInputEnvelope
    set?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    disconnect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    delete?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    update?: FinancialAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput | FinancialAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput[]
    updateMany?: FinancialAnalysisUpdateManyWithWhereWithoutBusinessProfileInput | FinancialAnalysisUpdateManyWithWhereWithoutBusinessProfileInput[]
    deleteMany?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
  }

  export type FinancialPeriodUncheckedUpdateManyWithoutBusinessProfileNestedInput = {
    create?: XOR<FinancialPeriodCreateWithoutBusinessProfileInput, FinancialPeriodUncheckedCreateWithoutBusinessProfileInput> | FinancialPeriodCreateWithoutBusinessProfileInput[] | FinancialPeriodUncheckedCreateWithoutBusinessProfileInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutBusinessProfileInput | FinancialPeriodCreateOrConnectWithoutBusinessProfileInput[]
    upsert?: FinancialPeriodUpsertWithWhereUniqueWithoutBusinessProfileInput | FinancialPeriodUpsertWithWhereUniqueWithoutBusinessProfileInput[]
    createMany?: FinancialPeriodCreateManyBusinessProfileInputEnvelope
    set?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    disconnect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    delete?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    update?: FinancialPeriodUpdateWithWhereUniqueWithoutBusinessProfileInput | FinancialPeriodUpdateWithWhereUniqueWithoutBusinessProfileInput[]
    updateMany?: FinancialPeriodUpdateManyWithWhereWithoutBusinessProfileInput | FinancialPeriodUpdateManyWithWhereWithoutBusinessProfileInput[]
    deleteMany?: FinancialPeriodScalarWhereInput | FinancialPeriodScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedConfigsInput = {
    create?: XOR<UserCreateWithoutCreatedConfigsInput, UserUncheckedCreateWithoutCreatedConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedConfigsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationAnalysisCreateNestedManyWithoutConfigInput = {
    create?: XOR<LocationAnalysisCreateWithoutConfigInput, LocationAnalysisUncheckedCreateWithoutConfigInput> | LocationAnalysisCreateWithoutConfigInput[] | LocationAnalysisUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutConfigInput | LocationAnalysisCreateOrConnectWithoutConfigInput[]
    createMany?: LocationAnalysisCreateManyConfigInputEnvelope
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
  }

  export type FinancialAnalysisCreateNestedManyWithoutConfigInput = {
    create?: XOR<FinancialAnalysisCreateWithoutConfigInput, FinancialAnalysisUncheckedCreateWithoutConfigInput> | FinancialAnalysisCreateWithoutConfigInput[] | FinancialAnalysisUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutConfigInput | FinancialAnalysisCreateOrConnectWithoutConfigInput[]
    createMany?: FinancialAnalysisCreateManyConfigInputEnvelope
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
  }

  export type LocationAnalysisUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<LocationAnalysisCreateWithoutConfigInput, LocationAnalysisUncheckedCreateWithoutConfigInput> | LocationAnalysisCreateWithoutConfigInput[] | LocationAnalysisUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutConfigInput | LocationAnalysisCreateOrConnectWithoutConfigInput[]
    createMany?: LocationAnalysisCreateManyConfigInputEnvelope
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
  }

  export type FinancialAnalysisUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<FinancialAnalysisCreateWithoutConfigInput, FinancialAnalysisUncheckedCreateWithoutConfigInput> | FinancialAnalysisCreateWithoutConfigInput[] | FinancialAnalysisUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutConfigInput | FinancialAnalysisCreateOrConnectWithoutConfigInput[]
    createMany?: FinancialAnalysisCreateManyConfigInputEnvelope
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
  }

  export type EnumConfigModuleFieldUpdateOperationsInput = {
    set?: $Enums.ConfigModule
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutCreatedConfigsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedConfigsInput, UserUncheckedCreateWithoutCreatedConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedConfigsInput
    upsert?: UserUpsertWithoutCreatedConfigsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedConfigsInput, UserUpdateWithoutCreatedConfigsInput>, UserUncheckedUpdateWithoutCreatedConfigsInput>
  }

  export type LocationAnalysisUpdateManyWithoutConfigNestedInput = {
    create?: XOR<LocationAnalysisCreateWithoutConfigInput, LocationAnalysisUncheckedCreateWithoutConfigInput> | LocationAnalysisCreateWithoutConfigInput[] | LocationAnalysisUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutConfigInput | LocationAnalysisCreateOrConnectWithoutConfigInput[]
    upsert?: LocationAnalysisUpsertWithWhereUniqueWithoutConfigInput | LocationAnalysisUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: LocationAnalysisCreateManyConfigInputEnvelope
    set?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    disconnect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    delete?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    update?: LocationAnalysisUpdateWithWhereUniqueWithoutConfigInput | LocationAnalysisUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: LocationAnalysisUpdateManyWithWhereWithoutConfigInput | LocationAnalysisUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: LocationAnalysisScalarWhereInput | LocationAnalysisScalarWhereInput[]
  }

  export type FinancialAnalysisUpdateManyWithoutConfigNestedInput = {
    create?: XOR<FinancialAnalysisCreateWithoutConfigInput, FinancialAnalysisUncheckedCreateWithoutConfigInput> | FinancialAnalysisCreateWithoutConfigInput[] | FinancialAnalysisUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutConfigInput | FinancialAnalysisCreateOrConnectWithoutConfigInput[]
    upsert?: FinancialAnalysisUpsertWithWhereUniqueWithoutConfigInput | FinancialAnalysisUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: FinancialAnalysisCreateManyConfigInputEnvelope
    set?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    disconnect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    delete?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    update?: FinancialAnalysisUpdateWithWhereUniqueWithoutConfigInput | FinancialAnalysisUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: FinancialAnalysisUpdateManyWithWhereWithoutConfigInput | FinancialAnalysisUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
  }

  export type LocationAnalysisUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<LocationAnalysisCreateWithoutConfigInput, LocationAnalysisUncheckedCreateWithoutConfigInput> | LocationAnalysisCreateWithoutConfigInput[] | LocationAnalysisUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: LocationAnalysisCreateOrConnectWithoutConfigInput | LocationAnalysisCreateOrConnectWithoutConfigInput[]
    upsert?: LocationAnalysisUpsertWithWhereUniqueWithoutConfigInput | LocationAnalysisUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: LocationAnalysisCreateManyConfigInputEnvelope
    set?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    disconnect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    delete?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    connect?: LocationAnalysisWhereUniqueInput | LocationAnalysisWhereUniqueInput[]
    update?: LocationAnalysisUpdateWithWhereUniqueWithoutConfigInput | LocationAnalysisUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: LocationAnalysisUpdateManyWithWhereWithoutConfigInput | LocationAnalysisUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: LocationAnalysisScalarWhereInput | LocationAnalysisScalarWhereInput[]
  }

  export type FinancialAnalysisUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<FinancialAnalysisCreateWithoutConfigInput, FinancialAnalysisUncheckedCreateWithoutConfigInput> | FinancialAnalysisCreateWithoutConfigInput[] | FinancialAnalysisUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutConfigInput | FinancialAnalysisCreateOrConnectWithoutConfigInput[]
    upsert?: FinancialAnalysisUpsertWithWhereUniqueWithoutConfigInput | FinancialAnalysisUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: FinancialAnalysisCreateManyConfigInputEnvelope
    set?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    disconnect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    delete?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    update?: FinancialAnalysisUpdateWithWhereUniqueWithoutConfigInput | FinancialAnalysisUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: FinancialAnalysisUpdateManyWithWhereWithoutConfigInput | FinancialAnalysisUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLocationAnalysesInput = {
    create?: XOR<UserCreateWithoutLocationAnalysesInput, UserUncheckedCreateWithoutLocationAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationAnalysesInput
    connect?: UserWhereUniqueInput
  }

  export type BusinessProfileCreateNestedOneWithoutLocationAnalysesInput = {
    create?: XOR<BusinessProfileCreateWithoutLocationAnalysesInput, BusinessProfileUncheckedCreateWithoutLocationAnalysesInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutLocationAnalysesInput
    connect?: BusinessProfileWhereUniqueInput
  }

  export type AnalysisConfigCreateNestedOneWithoutLocationAnalysesInput = {
    create?: XOR<AnalysisConfigCreateWithoutLocationAnalysesInput, AnalysisConfigUncheckedCreateWithoutLocationAnalysesInput>
    connectOrCreate?: AnalysisConfigCreateOrConnectWithoutLocationAnalysesInput
    connect?: AnalysisConfigWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumLocationCategoryFieldUpdateOperationsInput = {
    set?: $Enums.LocationCategory
  }

  export type UserUpdateOneRequiredWithoutLocationAnalysesNestedInput = {
    create?: XOR<UserCreateWithoutLocationAnalysesInput, UserUncheckedCreateWithoutLocationAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationAnalysesInput
    upsert?: UserUpsertWithoutLocationAnalysesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationAnalysesInput, UserUpdateWithoutLocationAnalysesInput>, UserUncheckedUpdateWithoutLocationAnalysesInput>
  }

  export type BusinessProfileUpdateOneRequiredWithoutLocationAnalysesNestedInput = {
    create?: XOR<BusinessProfileCreateWithoutLocationAnalysesInput, BusinessProfileUncheckedCreateWithoutLocationAnalysesInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutLocationAnalysesInput
    upsert?: BusinessProfileUpsertWithoutLocationAnalysesInput
    connect?: BusinessProfileWhereUniqueInput
    update?: XOR<XOR<BusinessProfileUpdateToOneWithWhereWithoutLocationAnalysesInput, BusinessProfileUpdateWithoutLocationAnalysesInput>, BusinessProfileUncheckedUpdateWithoutLocationAnalysesInput>
  }

  export type AnalysisConfigUpdateOneRequiredWithoutLocationAnalysesNestedInput = {
    create?: XOR<AnalysisConfigCreateWithoutLocationAnalysesInput, AnalysisConfigUncheckedCreateWithoutLocationAnalysesInput>
    connectOrCreate?: AnalysisConfigCreateOrConnectWithoutLocationAnalysesInput
    upsert?: AnalysisConfigUpsertWithoutLocationAnalysesInput
    connect?: AnalysisConfigWhereUniqueInput
    update?: XOR<XOR<AnalysisConfigUpdateToOneWithWhereWithoutLocationAnalysesInput, AnalysisConfigUpdateWithoutLocationAnalysesInput>, AnalysisConfigUncheckedUpdateWithoutLocationAnalysesInput>
  }

  export type UserCreateNestedOneWithoutFinancialAnalysesInput = {
    create?: XOR<UserCreateWithoutFinancialAnalysesInput, UserUncheckedCreateWithoutFinancialAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialAnalysesInput
    connect?: UserWhereUniqueInput
  }

  export type BusinessProfileCreateNestedOneWithoutFinancialAnalysesInput = {
    create?: XOR<BusinessProfileCreateWithoutFinancialAnalysesInput, BusinessProfileUncheckedCreateWithoutFinancialAnalysesInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutFinancialAnalysesInput
    connect?: BusinessProfileWhereUniqueInput
  }

  export type AnalysisConfigCreateNestedOneWithoutFinancialAnalysesInput = {
    create?: XOR<AnalysisConfigCreateWithoutFinancialAnalysesInput, AnalysisConfigUncheckedCreateWithoutFinancialAnalysesInput>
    connectOrCreate?: AnalysisConfigCreateOrConnectWithoutFinancialAnalysesInput
    connect?: AnalysisConfigWhereUniqueInput
  }

  export type FinancialPeriodCreateNestedManyWithoutSourceAnalysisInput = {
    create?: XOR<FinancialPeriodCreateWithoutSourceAnalysisInput, FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput> | FinancialPeriodCreateWithoutSourceAnalysisInput[] | FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutSourceAnalysisInput | FinancialPeriodCreateOrConnectWithoutSourceAnalysisInput[]
    createMany?: FinancialPeriodCreateManySourceAnalysisInputEnvelope
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
  }

  export type FinancialPeriodUncheckedCreateNestedManyWithoutSourceAnalysisInput = {
    create?: XOR<FinancialPeriodCreateWithoutSourceAnalysisInput, FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput> | FinancialPeriodCreateWithoutSourceAnalysisInput[] | FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutSourceAnalysisInput | FinancialPeriodCreateOrConnectWithoutSourceAnalysisInput[]
    createMany?: FinancialPeriodCreateManySourceAnalysisInputEnvelope
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
  }

  export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel
  }

  export type UserUpdateOneRequiredWithoutFinancialAnalysesNestedInput = {
    create?: XOR<UserCreateWithoutFinancialAnalysesInput, UserUncheckedCreateWithoutFinancialAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialAnalysesInput
    upsert?: UserUpsertWithoutFinancialAnalysesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinancialAnalysesInput, UserUpdateWithoutFinancialAnalysesInput>, UserUncheckedUpdateWithoutFinancialAnalysesInput>
  }

  export type BusinessProfileUpdateOneRequiredWithoutFinancialAnalysesNestedInput = {
    create?: XOR<BusinessProfileCreateWithoutFinancialAnalysesInput, BusinessProfileUncheckedCreateWithoutFinancialAnalysesInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutFinancialAnalysesInput
    upsert?: BusinessProfileUpsertWithoutFinancialAnalysesInput
    connect?: BusinessProfileWhereUniqueInput
    update?: XOR<XOR<BusinessProfileUpdateToOneWithWhereWithoutFinancialAnalysesInput, BusinessProfileUpdateWithoutFinancialAnalysesInput>, BusinessProfileUncheckedUpdateWithoutFinancialAnalysesInput>
  }

  export type AnalysisConfigUpdateOneRequiredWithoutFinancialAnalysesNestedInput = {
    create?: XOR<AnalysisConfigCreateWithoutFinancialAnalysesInput, AnalysisConfigUncheckedCreateWithoutFinancialAnalysesInput>
    connectOrCreate?: AnalysisConfigCreateOrConnectWithoutFinancialAnalysesInput
    upsert?: AnalysisConfigUpsertWithoutFinancialAnalysesInput
    connect?: AnalysisConfigWhereUniqueInput
    update?: XOR<XOR<AnalysisConfigUpdateToOneWithWhereWithoutFinancialAnalysesInput, AnalysisConfigUpdateWithoutFinancialAnalysesInput>, AnalysisConfigUncheckedUpdateWithoutFinancialAnalysesInput>
  }

  export type FinancialPeriodUpdateManyWithoutSourceAnalysisNestedInput = {
    create?: XOR<FinancialPeriodCreateWithoutSourceAnalysisInput, FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput> | FinancialPeriodCreateWithoutSourceAnalysisInput[] | FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutSourceAnalysisInput | FinancialPeriodCreateOrConnectWithoutSourceAnalysisInput[]
    upsert?: FinancialPeriodUpsertWithWhereUniqueWithoutSourceAnalysisInput | FinancialPeriodUpsertWithWhereUniqueWithoutSourceAnalysisInput[]
    createMany?: FinancialPeriodCreateManySourceAnalysisInputEnvelope
    set?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    disconnect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    delete?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    update?: FinancialPeriodUpdateWithWhereUniqueWithoutSourceAnalysisInput | FinancialPeriodUpdateWithWhereUniqueWithoutSourceAnalysisInput[]
    updateMany?: FinancialPeriodUpdateManyWithWhereWithoutSourceAnalysisInput | FinancialPeriodUpdateManyWithWhereWithoutSourceAnalysisInput[]
    deleteMany?: FinancialPeriodScalarWhereInput | FinancialPeriodScalarWhereInput[]
  }

  export type FinancialPeriodUncheckedUpdateManyWithoutSourceAnalysisNestedInput = {
    create?: XOR<FinancialPeriodCreateWithoutSourceAnalysisInput, FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput> | FinancialPeriodCreateWithoutSourceAnalysisInput[] | FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput[]
    connectOrCreate?: FinancialPeriodCreateOrConnectWithoutSourceAnalysisInput | FinancialPeriodCreateOrConnectWithoutSourceAnalysisInput[]
    upsert?: FinancialPeriodUpsertWithWhereUniqueWithoutSourceAnalysisInput | FinancialPeriodUpsertWithWhereUniqueWithoutSourceAnalysisInput[]
    createMany?: FinancialPeriodCreateManySourceAnalysisInputEnvelope
    set?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    disconnect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    delete?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    connect?: FinancialPeriodWhereUniqueInput | FinancialPeriodWhereUniqueInput[]
    update?: FinancialPeriodUpdateWithWhereUniqueWithoutSourceAnalysisInput | FinancialPeriodUpdateWithWhereUniqueWithoutSourceAnalysisInput[]
    updateMany?: FinancialPeriodUpdateManyWithWhereWithoutSourceAnalysisInput | FinancialPeriodUpdateManyWithWhereWithoutSourceAnalysisInput[]
    deleteMany?: FinancialPeriodScalarWhereInput | FinancialPeriodScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFinancialPeriodsInput = {
    create?: XOR<UserCreateWithoutFinancialPeriodsInput, UserUncheckedCreateWithoutFinancialPeriodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialPeriodsInput
    connect?: UserWhereUniqueInput
  }

  export type BusinessProfileCreateNestedOneWithoutFinancialPeriodsInput = {
    create?: XOR<BusinessProfileCreateWithoutFinancialPeriodsInput, BusinessProfileUncheckedCreateWithoutFinancialPeriodsInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutFinancialPeriodsInput
    connect?: BusinessProfileWhereUniqueInput
  }

  export type FinancialAnalysisCreateNestedOneWithoutPeriodsInput = {
    create?: XOR<FinancialAnalysisCreateWithoutPeriodsInput, FinancialAnalysisUncheckedCreateWithoutPeriodsInput>
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutPeriodsInput
    connect?: FinancialAnalysisWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFinancialPeriodsNestedInput = {
    create?: XOR<UserCreateWithoutFinancialPeriodsInput, UserUncheckedCreateWithoutFinancialPeriodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialPeriodsInput
    upsert?: UserUpsertWithoutFinancialPeriodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinancialPeriodsInput, UserUpdateWithoutFinancialPeriodsInput>, UserUncheckedUpdateWithoutFinancialPeriodsInput>
  }

  export type BusinessProfileUpdateOneRequiredWithoutFinancialPeriodsNestedInput = {
    create?: XOR<BusinessProfileCreateWithoutFinancialPeriodsInput, BusinessProfileUncheckedCreateWithoutFinancialPeriodsInput>
    connectOrCreate?: BusinessProfileCreateOrConnectWithoutFinancialPeriodsInput
    upsert?: BusinessProfileUpsertWithoutFinancialPeriodsInput
    connect?: BusinessProfileWhereUniqueInput
    update?: XOR<XOR<BusinessProfileUpdateToOneWithWhereWithoutFinancialPeriodsInput, BusinessProfileUpdateWithoutFinancialPeriodsInput>, BusinessProfileUncheckedUpdateWithoutFinancialPeriodsInput>
  }

  export type FinancialAnalysisUpdateOneRequiredWithoutPeriodsNestedInput = {
    create?: XOR<FinancialAnalysisCreateWithoutPeriodsInput, FinancialAnalysisUncheckedCreateWithoutPeriodsInput>
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutPeriodsInput
    upsert?: FinancialAnalysisUpsertWithoutPeriodsInput
    connect?: FinancialAnalysisWhereUniqueInput
    update?: XOR<XOR<FinancialAnalysisUpdateToOneWithWhereWithoutPeriodsInput, FinancialAnalysisUpdateWithoutPeriodsInput>, FinancialAnalysisUncheckedUpdateWithoutPeriodsInput>
  }

  export type UserCreateNestedOneWithoutAiConsentInput = {
    create?: XOR<UserCreateWithoutAiConsentInput, UserUncheckedCreateWithoutAiConsentInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiConsentInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAiConsentNestedInput = {
    create?: XOR<UserCreateWithoutAiConsentInput, UserUncheckedCreateWithoutAiConsentInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiConsentInput
    upsert?: UserUpsertWithoutAiConsentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiConsentInput, UserUpdateWithoutAiConsentInput>, UserUncheckedUpdateWithoutAiConsentInput>
  }

  export type UserCreateNestedOneWithoutAiUsagesInput = {
    create?: XOR<UserCreateWithoutAiUsagesInput, UserUncheckedCreateWithoutAiUsagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiUsagesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAiUsagesNestedInput = {
    create?: XOR<UserCreateWithoutAiUsagesInput, UserUncheckedCreateWithoutAiUsagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiUsagesInput
    upsert?: UserUpsertWithoutAiUsagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiUsagesInput, UserUpdateWithoutAiUsagesInput>, UserUncheckedUpdateWithoutAiUsagesInput>
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumChatRoleFieldUpdateOperationsInput = {
    set?: $Enums.ChatRole
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumLogLevelFieldUpdateOperationsInput = {
    set?: $Enums.LogLevel
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumConfigModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfigModule | EnumConfigModuleFieldRefInput<$PrismaModel>
    in?: $Enums.ConfigModule[] | ListEnumConfigModuleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfigModule[] | ListEnumConfigModuleFieldRefInput<$PrismaModel>
    not?: NestedEnumConfigModuleFilter<$PrismaModel> | $Enums.ConfigModule
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumConfigModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfigModule | EnumConfigModuleFieldRefInput<$PrismaModel>
    in?: $Enums.ConfigModule[] | ListEnumConfigModuleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfigModule[] | ListEnumConfigModuleFieldRefInput<$PrismaModel>
    not?: NestedEnumConfigModuleWithAggregatesFilter<$PrismaModel> | $Enums.ConfigModule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConfigModuleFilter<$PrismaModel>
    _max?: NestedEnumConfigModuleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumLocationCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationCategory | EnumLocationCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LocationCategory[] | ListEnumLocationCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationCategory[] | ListEnumLocationCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationCategoryFilter<$PrismaModel> | $Enums.LocationCategory
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumLocationCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationCategory | EnumLocationCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LocationCategory[] | ListEnumLocationCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocationCategory[] | ListEnumLocationCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationCategoryWithAggregatesFilter<$PrismaModel> | $Enums.LocationCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationCategoryFilter<$PrismaModel>
    _max?: NestedEnumLocationCategoryFilter<$PrismaModel>
  }

  export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumChatRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleFilter<$PrismaModel> | $Enums.ChatRole
  }

  export type NestedEnumChatRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChatRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatRoleFilter<$PrismaModel>
    _max?: NestedEnumChatRoleFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumLogLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLogLevelFilter<$PrismaModel> | $Enums.LogLevel
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumLogLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLogLevelWithAggregatesFilter<$PrismaModel> | $Enums.LogLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogLevelFilter<$PrismaModel>
    _max?: NestedEnumLogLevelFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BusinessProfileCreateWithoutUserInput = {
    id?: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutBusinessProfileInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutBusinessProfileInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileCreateOrConnectWithoutUserInput = {
    where: BusinessProfileWhereUniqueInput
    create: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
  }

  export type LocationAnalysisCreateWithoutUserInput = {
    id?: string
    code: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    businessProfile: BusinessProfileCreateNestedOneWithoutLocationAnalysesInput
    config: AnalysisConfigCreateNestedOneWithoutLocationAnalysesInput
  }

  export type LocationAnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    businessProfileId: string
    configId: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LocationAnalysisCreateOrConnectWithoutUserInput = {
    where: LocationAnalysisWhereUniqueInput
    create: XOR<LocationAnalysisCreateWithoutUserInput, LocationAnalysisUncheckedCreateWithoutUserInput>
  }

  export type LocationAnalysisCreateManyUserInputEnvelope = {
    data: LocationAnalysisCreateManyUserInput | LocationAnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FinancialAnalysisCreateWithoutUserInput = {
    id?: string
    code: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
    businessProfile: BusinessProfileCreateNestedOneWithoutFinancialAnalysesInput
    config: AnalysisConfigCreateNestedOneWithoutFinancialAnalysesInput
    periods?: FinancialPeriodCreateNestedManyWithoutSourceAnalysisInput
  }

  export type FinancialAnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    businessProfileId: string
    configId: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
    periods?: FinancialPeriodUncheckedCreateNestedManyWithoutSourceAnalysisInput
  }

  export type FinancialAnalysisCreateOrConnectWithoutUserInput = {
    where: FinancialAnalysisWhereUniqueInput
    create: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput>
  }

  export type FinancialAnalysisCreateManyUserInputEnvelope = {
    data: FinancialAnalysisCreateManyUserInput | FinancialAnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FinancialPeriodCreateWithoutUserInput = {
    id?: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile: BusinessProfileCreateNestedOneWithoutFinancialPeriodsInput
    sourceAnalysis: FinancialAnalysisCreateNestedOneWithoutPeriodsInput
  }

  export type FinancialPeriodUncheckedCreateWithoutUserInput = {
    id?: string
    businessProfileId: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    sourceAnalysisId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialPeriodCreateOrConnectWithoutUserInput = {
    where: FinancialPeriodWhereUniqueInput
    create: XOR<FinancialPeriodCreateWithoutUserInput, FinancialPeriodUncheckedCreateWithoutUserInput>
  }

  export type FinancialPeriodCreateManyUserInputEnvelope = {
    data: FinancialPeriodCreateManyUserInput | FinancialPeriodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AiConsentCreateWithoutUserInput = {
    id?: string
    allowContext?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiConsentUncheckedCreateWithoutUserInput = {
    id?: string
    allowContext?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiConsentCreateOrConnectWithoutUserInput = {
    where: AiConsentWhereUniqueInput
    create: XOR<AiConsentCreateWithoutUserInput, AiConsentUncheckedCreateWithoutUserInput>
  }

  export type AiUsageCreateWithoutUserInput = {
    id?: string
    status: string
    contextUsed: boolean
    inputTokens?: number | null
    outputTokens?: number | null
    createdAt?: Date | string
  }

  export type AiUsageUncheckedCreateWithoutUserInput = {
    id?: string
    status: string
    contextUsed: boolean
    inputTokens?: number | null
    outputTokens?: number | null
    createdAt?: Date | string
  }

  export type AiUsageCreateOrConnectWithoutUserInput = {
    where: AiUsageWhereUniqueInput
    create: XOR<AiUsageCreateWithoutUserInput, AiUsageUncheckedCreateWithoutUserInput>
  }

  export type AiUsageCreateManyUserInputEnvelope = {
    data: AiUsageCreateManyUserInput | AiUsageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    role: $Enums.ChatRole
    content: string
    contextUsed?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    role: $Enums.ChatRole
    content: string
    contextUsed?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: bigint | number
    eventType: string
    level?: $Enums.LogLevel
    component?: string | null
    errorCode?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    eventType: string
    level?: $Enums.LogLevel
    component?: string | null
    errorCode?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisConfigCreateWithoutCreatedByInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutConfigInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutConfigInput
  }

  export type AnalysisConfigUncheckedCreateWithoutCreatedByInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutConfigInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutConfigInput
  }

  export type AnalysisConfigCreateOrConnectWithoutCreatedByInput = {
    where: AnalysisConfigWhereUniqueInput
    create: XOR<AnalysisConfigCreateWithoutCreatedByInput, AnalysisConfigUncheckedCreateWithoutCreatedByInput>
  }

  export type AnalysisConfigCreateManyCreatedByInputEnvelope = {
    data: AnalysisConfigCreateManyCreatedByInput | AnalysisConfigCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type BusinessProfileUpsertWithoutUserInput = {
    update: XOR<BusinessProfileUpdateWithoutUserInput, BusinessProfileUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessProfileCreateWithoutUserInput, BusinessProfileUncheckedCreateWithoutUserInput>
    where?: BusinessProfileWhereInput
  }

  export type BusinessProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: BusinessProfileWhereInput
    data: XOR<BusinessProfileUpdateWithoutUserInput, BusinessProfileUncheckedUpdateWithoutUserInput>
  }

  export type BusinessProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUpdateManyWithoutBusinessProfileNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutBusinessProfileNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutBusinessProfileNestedInput
  }

  export type BusinessProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutBusinessProfileNestedInput
  }

  export type LocationAnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: LocationAnalysisWhereUniqueInput
    update: XOR<LocationAnalysisUpdateWithoutUserInput, LocationAnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<LocationAnalysisCreateWithoutUserInput, LocationAnalysisUncheckedCreateWithoutUserInput>
  }

  export type LocationAnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: LocationAnalysisWhereUniqueInput
    data: XOR<LocationAnalysisUpdateWithoutUserInput, LocationAnalysisUncheckedUpdateWithoutUserInput>
  }

  export type LocationAnalysisUpdateManyWithWhereWithoutUserInput = {
    where: LocationAnalysisScalarWhereInput
    data: XOR<LocationAnalysisUpdateManyMutationInput, LocationAnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type LocationAnalysisScalarWhereInput = {
    AND?: LocationAnalysisScalarWhereInput | LocationAnalysisScalarWhereInput[]
    OR?: LocationAnalysisScalarWhereInput[]
    NOT?: LocationAnalysisScalarWhereInput | LocationAnalysisScalarWhereInput[]
    id?: UuidFilter<"LocationAnalysis"> | string
    code?: StringFilter<"LocationAnalysis"> | string
    userId?: UuidFilter<"LocationAnalysis"> | string
    businessProfileId?: UuidFilter<"LocationAnalysis"> | string
    configId?: UuidFilter<"LocationAnalysis"> | string
    locationName?: StringFilter<"LocationAnalysis"> | string
    district?: StringFilter<"LocationAnalysis"> | string
    latitude?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFilter<"LocationAnalysis"> | number
    accessibility?: IntFilter<"LocationAnalysis"> | number
    marketPotential?: IntFilter<"LocationAnalysis"> | number
    score?: DecimalFilter<"LocationAnalysis"> | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFilter<"LocationAnalysis"> | $Enums.LocationCategory
    details?: JsonFilter<"LocationAnalysis">
    strongestFactor?: StringFilter<"LocationAnalysis"> | string
    weakestFactor?: StringFilter<"LocationAnalysis"> | string
    warnings?: JsonFilter<"LocationAnalysis">
    createdAt?: DateTimeFilter<"LocationAnalysis"> | Date | string
  }

  export type FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: FinancialAnalysisWhereUniqueInput
    update: XOR<FinancialAnalysisUpdateWithoutUserInput, FinancialAnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput>
  }

  export type FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: FinancialAnalysisWhereUniqueInput
    data: XOR<FinancialAnalysisUpdateWithoutUserInput, FinancialAnalysisUncheckedUpdateWithoutUserInput>
  }

  export type FinancialAnalysisUpdateManyWithWhereWithoutUserInput = {
    where: FinancialAnalysisScalarWhereInput
    data: XOR<FinancialAnalysisUpdateManyMutationInput, FinancialAnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type FinancialAnalysisScalarWhereInput = {
    AND?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
    OR?: FinancialAnalysisScalarWhereInput[]
    NOT?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
    id?: UuidFilter<"FinancialAnalysis"> | string
    code?: StringFilter<"FinancialAnalysis"> | string
    userId?: UuidFilter<"FinancialAnalysis"> | string
    businessProfileId?: UuidFilter<"FinancialAnalysis"> | string
    configId?: UuidFilter<"FinancialAnalysis"> | string
    fileName?: StringFilter<"FinancialAnalysis"> | string
    periodStart?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    periodEnd?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    periodsAnalyzed?: IntFilter<"FinancialAnalysis"> | number
    ratios?: JsonFilter<"FinancialAnalysis">
    ruleResults?: JsonFilter<"FinancialAnalysis">
    patterns?: JsonFilter<"FinancialAnalysis">
    excludedRules?: JsonFilter<"FinancialAnalysis">
    warnings?: JsonFilter<"FinancialAnalysis">
    riskIndex?: DecimalFilter<"FinancialAnalysis"> | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFilter<"FinancialAnalysis"> | $Enums.RiskLevel
    createdAt?: DateTimeFilter<"FinancialAnalysis"> | Date | string
  }

  export type FinancialPeriodUpsertWithWhereUniqueWithoutUserInput = {
    where: FinancialPeriodWhereUniqueInput
    update: XOR<FinancialPeriodUpdateWithoutUserInput, FinancialPeriodUncheckedUpdateWithoutUserInput>
    create: XOR<FinancialPeriodCreateWithoutUserInput, FinancialPeriodUncheckedCreateWithoutUserInput>
  }

  export type FinancialPeriodUpdateWithWhereUniqueWithoutUserInput = {
    where: FinancialPeriodWhereUniqueInput
    data: XOR<FinancialPeriodUpdateWithoutUserInput, FinancialPeriodUncheckedUpdateWithoutUserInput>
  }

  export type FinancialPeriodUpdateManyWithWhereWithoutUserInput = {
    where: FinancialPeriodScalarWhereInput
    data: XOR<FinancialPeriodUpdateManyMutationInput, FinancialPeriodUncheckedUpdateManyWithoutUserInput>
  }

  export type FinancialPeriodScalarWhereInput = {
    AND?: FinancialPeriodScalarWhereInput | FinancialPeriodScalarWhereInput[]
    OR?: FinancialPeriodScalarWhereInput[]
    NOT?: FinancialPeriodScalarWhereInput | FinancialPeriodScalarWhereInput[]
    id?: UuidFilter<"FinancialPeriod"> | string
    userId?: UuidFilter<"FinancialPeriod"> | string
    businessProfileId?: UuidFilter<"FinancialPeriod"> | string
    periodStart?: DateTimeFilter<"FinancialPeriod"> | Date | string
    revenue?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    equity?: DecimalFilter<"FinancialPeriod"> | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: UuidFilter<"FinancialPeriod"> | string
    createdAt?: DateTimeFilter<"FinancialPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialPeriod"> | Date | string
  }

  export type AiConsentUpsertWithoutUserInput = {
    update: XOR<AiConsentUpdateWithoutUserInput, AiConsentUncheckedUpdateWithoutUserInput>
    create: XOR<AiConsentCreateWithoutUserInput, AiConsentUncheckedCreateWithoutUserInput>
    where?: AiConsentWhereInput
  }

  export type AiConsentUpdateToOneWithWhereWithoutUserInput = {
    where?: AiConsentWhereInput
    data: XOR<AiConsentUpdateWithoutUserInput, AiConsentUncheckedUpdateWithoutUserInput>
  }

  export type AiConsentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowContext?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiConsentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowContext?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUpsertWithWhereUniqueWithoutUserInput = {
    where: AiUsageWhereUniqueInput
    update: XOR<AiUsageUpdateWithoutUserInput, AiUsageUncheckedUpdateWithoutUserInput>
    create: XOR<AiUsageCreateWithoutUserInput, AiUsageUncheckedCreateWithoutUserInput>
  }

  export type AiUsageUpdateWithWhereUniqueWithoutUserInput = {
    where: AiUsageWhereUniqueInput
    data: XOR<AiUsageUpdateWithoutUserInput, AiUsageUncheckedUpdateWithoutUserInput>
  }

  export type AiUsageUpdateManyWithWhereWithoutUserInput = {
    where: AiUsageScalarWhereInput
    data: XOR<AiUsageUpdateManyMutationInput, AiUsageUncheckedUpdateManyWithoutUserInput>
  }

  export type AiUsageScalarWhereInput = {
    AND?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
    OR?: AiUsageScalarWhereInput[]
    NOT?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
    id?: UuidFilter<"AiUsage"> | string
    userId?: UuidFilter<"AiUsage"> | string
    status?: StringFilter<"AiUsage"> | string
    contextUsed?: BoolFilter<"AiUsage"> | boolean
    inputTokens?: IntNullableFilter<"AiUsage"> | number | null
    outputTokens?: IntNullableFilter<"AiUsage"> | number | null
    createdAt?: DateTimeFilter<"AiUsage"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: UuidFilter<"ChatMessage"> | string
    userId?: UuidFilter<"ChatMessage"> | string
    role?: EnumChatRoleFilter<"ChatMessage"> | $Enums.ChatRole
    content?: StringFilter<"ChatMessage"> | string
    contextUsed?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: BigIntFilter<"ActivityLog"> | bigint | number
    userId?: UuidNullableFilter<"ActivityLog"> | string | null
    eventType?: StringFilter<"ActivityLog"> | string
    level?: EnumLogLevelFilter<"ActivityLog"> | $Enums.LogLevel
    component?: StringNullableFilter<"ActivityLog"> | string | null
    errorCode?: StringNullableFilter<"ActivityLog"> | string | null
    message?: StringFilter<"ActivityLog"> | string
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type AnalysisConfigUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: AnalysisConfigWhereUniqueInput
    update: XOR<AnalysisConfigUpdateWithoutCreatedByInput, AnalysisConfigUncheckedUpdateWithoutCreatedByInput>
    create: XOR<AnalysisConfigCreateWithoutCreatedByInput, AnalysisConfigUncheckedCreateWithoutCreatedByInput>
  }

  export type AnalysisConfigUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: AnalysisConfigWhereUniqueInput
    data: XOR<AnalysisConfigUpdateWithoutCreatedByInput, AnalysisConfigUncheckedUpdateWithoutCreatedByInput>
  }

  export type AnalysisConfigUpdateManyWithWhereWithoutCreatedByInput = {
    where: AnalysisConfigScalarWhereInput
    data: XOR<AnalysisConfigUpdateManyMutationInput, AnalysisConfigUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type AnalysisConfigScalarWhereInput = {
    AND?: AnalysisConfigScalarWhereInput | AnalysisConfigScalarWhereInput[]
    OR?: AnalysisConfigScalarWhereInput[]
    NOT?: AnalysisConfigScalarWhereInput | AnalysisConfigScalarWhereInput[]
    id?: UuidFilter<"AnalysisConfig"> | string
    module?: EnumConfigModuleFilter<"AnalysisConfig"> | $Enums.ConfigModule
    versionNumber?: IntFilter<"AnalysisConfig"> | number
    isActive?: BoolFilter<"AnalysisConfig"> | boolean
    parameters?: JsonFilter<"AnalysisConfig">
    note?: StringNullableFilter<"AnalysisConfig"> | string | null
    createdById?: UuidNullableFilter<"AnalysisConfig"> | string | null
    activatedAt?: DateTimeNullableFilter<"AnalysisConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"AnalysisConfig"> | Date | string
  }

  export type UserCreateWithoutBusinessProfileInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutBusinessProfileInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentUncheckedCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutBusinessProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessProfileInput, UserUncheckedCreateWithoutBusinessProfileInput>
  }

  export type LocationAnalysisCreateWithoutBusinessProfileInput = {
    id?: string
    code: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLocationAnalysesInput
    config: AnalysisConfigCreateNestedOneWithoutLocationAnalysesInput
  }

  export type LocationAnalysisUncheckedCreateWithoutBusinessProfileInput = {
    id?: string
    code: string
    userId: string
    configId: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LocationAnalysisCreateOrConnectWithoutBusinessProfileInput = {
    where: LocationAnalysisWhereUniqueInput
    create: XOR<LocationAnalysisCreateWithoutBusinessProfileInput, LocationAnalysisUncheckedCreateWithoutBusinessProfileInput>
  }

  export type LocationAnalysisCreateManyBusinessProfileInputEnvelope = {
    data: LocationAnalysisCreateManyBusinessProfileInput | LocationAnalysisCreateManyBusinessProfileInput[]
    skipDuplicates?: boolean
  }

  export type FinancialAnalysisCreateWithoutBusinessProfileInput = {
    id?: string
    code: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFinancialAnalysesInput
    config: AnalysisConfigCreateNestedOneWithoutFinancialAnalysesInput
    periods?: FinancialPeriodCreateNestedManyWithoutSourceAnalysisInput
  }

  export type FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput = {
    id?: string
    code: string
    userId: string
    configId: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
    periods?: FinancialPeriodUncheckedCreateNestedManyWithoutSourceAnalysisInput
  }

  export type FinancialAnalysisCreateOrConnectWithoutBusinessProfileInput = {
    where: FinancialAnalysisWhereUniqueInput
    create: XOR<FinancialAnalysisCreateWithoutBusinessProfileInput, FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput>
  }

  export type FinancialAnalysisCreateManyBusinessProfileInputEnvelope = {
    data: FinancialAnalysisCreateManyBusinessProfileInput | FinancialAnalysisCreateManyBusinessProfileInput[]
    skipDuplicates?: boolean
  }

  export type FinancialPeriodCreateWithoutBusinessProfileInput = {
    id?: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinancialPeriodsInput
    sourceAnalysis: FinancialAnalysisCreateNestedOneWithoutPeriodsInput
  }

  export type FinancialPeriodUncheckedCreateWithoutBusinessProfileInput = {
    id?: string
    userId: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    sourceAnalysisId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialPeriodCreateOrConnectWithoutBusinessProfileInput = {
    where: FinancialPeriodWhereUniqueInput
    create: XOR<FinancialPeriodCreateWithoutBusinessProfileInput, FinancialPeriodUncheckedCreateWithoutBusinessProfileInput>
  }

  export type FinancialPeriodCreateManyBusinessProfileInputEnvelope = {
    data: FinancialPeriodCreateManyBusinessProfileInput | FinancialPeriodCreateManyBusinessProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBusinessProfileInput = {
    update: XOR<UserUpdateWithoutBusinessProfileInput, UserUncheckedUpdateWithoutBusinessProfileInput>
    create: XOR<UserCreateWithoutBusinessProfileInput, UserUncheckedCreateWithoutBusinessProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusinessProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusinessProfileInput, UserUncheckedUpdateWithoutBusinessProfileInput>
  }

  export type UserUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUncheckedUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type LocationAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput = {
    where: LocationAnalysisWhereUniqueInput
    update: XOR<LocationAnalysisUpdateWithoutBusinessProfileInput, LocationAnalysisUncheckedUpdateWithoutBusinessProfileInput>
    create: XOR<LocationAnalysisCreateWithoutBusinessProfileInput, LocationAnalysisUncheckedCreateWithoutBusinessProfileInput>
  }

  export type LocationAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput = {
    where: LocationAnalysisWhereUniqueInput
    data: XOR<LocationAnalysisUpdateWithoutBusinessProfileInput, LocationAnalysisUncheckedUpdateWithoutBusinessProfileInput>
  }

  export type LocationAnalysisUpdateManyWithWhereWithoutBusinessProfileInput = {
    where: LocationAnalysisScalarWhereInput
    data: XOR<LocationAnalysisUpdateManyMutationInput, LocationAnalysisUncheckedUpdateManyWithoutBusinessProfileInput>
  }

  export type FinancialAnalysisUpsertWithWhereUniqueWithoutBusinessProfileInput = {
    where: FinancialAnalysisWhereUniqueInput
    update: XOR<FinancialAnalysisUpdateWithoutBusinessProfileInput, FinancialAnalysisUncheckedUpdateWithoutBusinessProfileInput>
    create: XOR<FinancialAnalysisCreateWithoutBusinessProfileInput, FinancialAnalysisUncheckedCreateWithoutBusinessProfileInput>
  }

  export type FinancialAnalysisUpdateWithWhereUniqueWithoutBusinessProfileInput = {
    where: FinancialAnalysisWhereUniqueInput
    data: XOR<FinancialAnalysisUpdateWithoutBusinessProfileInput, FinancialAnalysisUncheckedUpdateWithoutBusinessProfileInput>
  }

  export type FinancialAnalysisUpdateManyWithWhereWithoutBusinessProfileInput = {
    where: FinancialAnalysisScalarWhereInput
    data: XOR<FinancialAnalysisUpdateManyMutationInput, FinancialAnalysisUncheckedUpdateManyWithoutBusinessProfileInput>
  }

  export type FinancialPeriodUpsertWithWhereUniqueWithoutBusinessProfileInput = {
    where: FinancialPeriodWhereUniqueInput
    update: XOR<FinancialPeriodUpdateWithoutBusinessProfileInput, FinancialPeriodUncheckedUpdateWithoutBusinessProfileInput>
    create: XOR<FinancialPeriodCreateWithoutBusinessProfileInput, FinancialPeriodUncheckedCreateWithoutBusinessProfileInput>
  }

  export type FinancialPeriodUpdateWithWhereUniqueWithoutBusinessProfileInput = {
    where: FinancialPeriodWhereUniqueInput
    data: XOR<FinancialPeriodUpdateWithoutBusinessProfileInput, FinancialPeriodUncheckedUpdateWithoutBusinessProfileInput>
  }

  export type FinancialPeriodUpdateManyWithWhereWithoutBusinessProfileInput = {
    where: FinancialPeriodScalarWhereInput
    data: XOR<FinancialPeriodUpdateManyMutationInput, FinancialPeriodUncheckedUpdateManyWithoutBusinessProfileInput>
  }

  export type UserCreateWithoutCreatedConfigsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedConfigsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentUncheckedCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedConfigsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedConfigsInput, UserUncheckedCreateWithoutCreatedConfigsInput>
  }

  export type LocationAnalysisCreateWithoutConfigInput = {
    id?: string
    code: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLocationAnalysesInput
    businessProfile: BusinessProfileCreateNestedOneWithoutLocationAnalysesInput
  }

  export type LocationAnalysisUncheckedCreateWithoutConfigInput = {
    id?: string
    code: string
    userId: string
    businessProfileId: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LocationAnalysisCreateOrConnectWithoutConfigInput = {
    where: LocationAnalysisWhereUniqueInput
    create: XOR<LocationAnalysisCreateWithoutConfigInput, LocationAnalysisUncheckedCreateWithoutConfigInput>
  }

  export type LocationAnalysisCreateManyConfigInputEnvelope = {
    data: LocationAnalysisCreateManyConfigInput | LocationAnalysisCreateManyConfigInput[]
    skipDuplicates?: boolean
  }

  export type FinancialAnalysisCreateWithoutConfigInput = {
    id?: string
    code: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFinancialAnalysesInput
    businessProfile: BusinessProfileCreateNestedOneWithoutFinancialAnalysesInput
    periods?: FinancialPeriodCreateNestedManyWithoutSourceAnalysisInput
  }

  export type FinancialAnalysisUncheckedCreateWithoutConfigInput = {
    id?: string
    code: string
    userId: string
    businessProfileId: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
    periods?: FinancialPeriodUncheckedCreateNestedManyWithoutSourceAnalysisInput
  }

  export type FinancialAnalysisCreateOrConnectWithoutConfigInput = {
    where: FinancialAnalysisWhereUniqueInput
    create: XOR<FinancialAnalysisCreateWithoutConfigInput, FinancialAnalysisUncheckedCreateWithoutConfigInput>
  }

  export type FinancialAnalysisCreateManyConfigInputEnvelope = {
    data: FinancialAnalysisCreateManyConfigInput | FinancialAnalysisCreateManyConfigInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedConfigsInput = {
    update: XOR<UserUpdateWithoutCreatedConfigsInput, UserUncheckedUpdateWithoutCreatedConfigsInput>
    create: XOR<UserCreateWithoutCreatedConfigsInput, UserUncheckedCreateWithoutCreatedConfigsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedConfigsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedConfigsInput, UserUncheckedUpdateWithoutCreatedConfigsInput>
  }

  export type UserUpdateWithoutCreatedConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUncheckedUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationAnalysisUpsertWithWhereUniqueWithoutConfigInput = {
    where: LocationAnalysisWhereUniqueInput
    update: XOR<LocationAnalysisUpdateWithoutConfigInput, LocationAnalysisUncheckedUpdateWithoutConfigInput>
    create: XOR<LocationAnalysisCreateWithoutConfigInput, LocationAnalysisUncheckedCreateWithoutConfigInput>
  }

  export type LocationAnalysisUpdateWithWhereUniqueWithoutConfigInput = {
    where: LocationAnalysisWhereUniqueInput
    data: XOR<LocationAnalysisUpdateWithoutConfigInput, LocationAnalysisUncheckedUpdateWithoutConfigInput>
  }

  export type LocationAnalysisUpdateManyWithWhereWithoutConfigInput = {
    where: LocationAnalysisScalarWhereInput
    data: XOR<LocationAnalysisUpdateManyMutationInput, LocationAnalysisUncheckedUpdateManyWithoutConfigInput>
  }

  export type FinancialAnalysisUpsertWithWhereUniqueWithoutConfigInput = {
    where: FinancialAnalysisWhereUniqueInput
    update: XOR<FinancialAnalysisUpdateWithoutConfigInput, FinancialAnalysisUncheckedUpdateWithoutConfigInput>
    create: XOR<FinancialAnalysisCreateWithoutConfigInput, FinancialAnalysisUncheckedCreateWithoutConfigInput>
  }

  export type FinancialAnalysisUpdateWithWhereUniqueWithoutConfigInput = {
    where: FinancialAnalysisWhereUniqueInput
    data: XOR<FinancialAnalysisUpdateWithoutConfigInput, FinancialAnalysisUncheckedUpdateWithoutConfigInput>
  }

  export type FinancialAnalysisUpdateManyWithWhereWithoutConfigInput = {
    where: FinancialAnalysisScalarWhereInput
    data: XOR<FinancialAnalysisUpdateManyMutationInput, FinancialAnalysisUncheckedUpdateManyWithoutConfigInput>
  }

  export type UserCreateWithoutLocationAnalysesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutLocationAnalysesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentUncheckedCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutLocationAnalysesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationAnalysesInput, UserUncheckedCreateWithoutLocationAnalysesInput>
  }

  export type BusinessProfileCreateWithoutLocationAnalysesInput = {
    id?: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBusinessProfileInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutBusinessProfileInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileUncheckedCreateWithoutLocationAnalysesInput = {
    id?: string
    userId: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileCreateOrConnectWithoutLocationAnalysesInput = {
    where: BusinessProfileWhereUniqueInput
    create: XOR<BusinessProfileCreateWithoutLocationAnalysesInput, BusinessProfileUncheckedCreateWithoutLocationAnalysesInput>
  }

  export type AnalysisConfigCreateWithoutLocationAnalysesInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedConfigsInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutConfigInput
  }

  export type AnalysisConfigUncheckedCreateWithoutLocationAnalysesInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutConfigInput
  }

  export type AnalysisConfigCreateOrConnectWithoutLocationAnalysesInput = {
    where: AnalysisConfigWhereUniqueInput
    create: XOR<AnalysisConfigCreateWithoutLocationAnalysesInput, AnalysisConfigUncheckedCreateWithoutLocationAnalysesInput>
  }

  export type UserUpsertWithoutLocationAnalysesInput = {
    update: XOR<UserUpdateWithoutLocationAnalysesInput, UserUncheckedUpdateWithoutLocationAnalysesInput>
    create: XOR<UserCreateWithoutLocationAnalysesInput, UserUncheckedCreateWithoutLocationAnalysesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationAnalysesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationAnalysesInput, UserUncheckedUpdateWithoutLocationAnalysesInput>
  }

  export type UserUpdateWithoutLocationAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUncheckedUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type BusinessProfileUpsertWithoutLocationAnalysesInput = {
    update: XOR<BusinessProfileUpdateWithoutLocationAnalysesInput, BusinessProfileUncheckedUpdateWithoutLocationAnalysesInput>
    create: XOR<BusinessProfileCreateWithoutLocationAnalysesInput, BusinessProfileUncheckedCreateWithoutLocationAnalysesInput>
    where?: BusinessProfileWhereInput
  }

  export type BusinessProfileUpdateToOneWithWhereWithoutLocationAnalysesInput = {
    where?: BusinessProfileWhereInput
    data: XOR<BusinessProfileUpdateWithoutLocationAnalysesInput, BusinessProfileUncheckedUpdateWithoutLocationAnalysesInput>
  }

  export type BusinessProfileUpdateWithoutLocationAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusinessProfileNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutBusinessProfileNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutBusinessProfileNestedInput
  }

  export type BusinessProfileUncheckedUpdateWithoutLocationAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutBusinessProfileNestedInput
  }

  export type AnalysisConfigUpsertWithoutLocationAnalysesInput = {
    update: XOR<AnalysisConfigUpdateWithoutLocationAnalysesInput, AnalysisConfigUncheckedUpdateWithoutLocationAnalysesInput>
    create: XOR<AnalysisConfigCreateWithoutLocationAnalysesInput, AnalysisConfigUncheckedCreateWithoutLocationAnalysesInput>
    where?: AnalysisConfigWhereInput
  }

  export type AnalysisConfigUpdateToOneWithWhereWithoutLocationAnalysesInput = {
    where?: AnalysisConfigWhereInput
    data: XOR<AnalysisConfigUpdateWithoutLocationAnalysesInput, AnalysisConfigUncheckedUpdateWithoutLocationAnalysesInput>
  }

  export type AnalysisConfigUpdateWithoutLocationAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedConfigsNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutConfigNestedInput
  }

  export type AnalysisConfigUncheckedUpdateWithoutLocationAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type UserCreateWithoutFinancialAnalysesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutFinancialAnalysesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentUncheckedCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutFinancialAnalysesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinancialAnalysesInput, UserUncheckedCreateWithoutFinancialAnalysesInput>
  }

  export type BusinessProfileCreateWithoutFinancialAnalysesInput = {
    id?: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBusinessProfileInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutBusinessProfileInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileUncheckedCreateWithoutFinancialAnalysesInput = {
    id?: string
    userId: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileCreateOrConnectWithoutFinancialAnalysesInput = {
    where: BusinessProfileWhereUniqueInput
    create: XOR<BusinessProfileCreateWithoutFinancialAnalysesInput, BusinessProfileUncheckedCreateWithoutFinancialAnalysesInput>
  }

  export type AnalysisConfigCreateWithoutFinancialAnalysesInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedConfigsInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutConfigInput
  }

  export type AnalysisConfigUncheckedCreateWithoutFinancialAnalysesInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    createdById?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutConfigInput
  }

  export type AnalysisConfigCreateOrConnectWithoutFinancialAnalysesInput = {
    where: AnalysisConfigWhereUniqueInput
    create: XOR<AnalysisConfigCreateWithoutFinancialAnalysesInput, AnalysisConfigUncheckedCreateWithoutFinancialAnalysesInput>
  }

  export type FinancialPeriodCreateWithoutSourceAnalysisInput = {
    id?: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinancialPeriodsInput
    businessProfile: BusinessProfileCreateNestedOneWithoutFinancialPeriodsInput
  }

  export type FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput = {
    id?: string
    userId: string
    businessProfileId: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialPeriodCreateOrConnectWithoutSourceAnalysisInput = {
    where: FinancialPeriodWhereUniqueInput
    create: XOR<FinancialPeriodCreateWithoutSourceAnalysisInput, FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput>
  }

  export type FinancialPeriodCreateManySourceAnalysisInputEnvelope = {
    data: FinancialPeriodCreateManySourceAnalysisInput | FinancialPeriodCreateManySourceAnalysisInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFinancialAnalysesInput = {
    update: XOR<UserUpdateWithoutFinancialAnalysesInput, UserUncheckedUpdateWithoutFinancialAnalysesInput>
    create: XOR<UserCreateWithoutFinancialAnalysesInput, UserUncheckedCreateWithoutFinancialAnalysesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinancialAnalysesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinancialAnalysesInput, UserUncheckedUpdateWithoutFinancialAnalysesInput>
  }

  export type UserUpdateWithoutFinancialAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFinancialAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUncheckedUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type BusinessProfileUpsertWithoutFinancialAnalysesInput = {
    update: XOR<BusinessProfileUpdateWithoutFinancialAnalysesInput, BusinessProfileUncheckedUpdateWithoutFinancialAnalysesInput>
    create: XOR<BusinessProfileCreateWithoutFinancialAnalysesInput, BusinessProfileUncheckedCreateWithoutFinancialAnalysesInput>
    where?: BusinessProfileWhereInput
  }

  export type BusinessProfileUpdateToOneWithWhereWithoutFinancialAnalysesInput = {
    where?: BusinessProfileWhereInput
    data: XOR<BusinessProfileUpdateWithoutFinancialAnalysesInput, BusinessProfileUncheckedUpdateWithoutFinancialAnalysesInput>
  }

  export type BusinessProfileUpdateWithoutFinancialAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusinessProfileNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutBusinessProfileNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutBusinessProfileNestedInput
  }

  export type BusinessProfileUncheckedUpdateWithoutFinancialAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutBusinessProfileNestedInput
  }

  export type AnalysisConfigUpsertWithoutFinancialAnalysesInput = {
    update: XOR<AnalysisConfigUpdateWithoutFinancialAnalysesInput, AnalysisConfigUncheckedUpdateWithoutFinancialAnalysesInput>
    create: XOR<AnalysisConfigCreateWithoutFinancialAnalysesInput, AnalysisConfigUncheckedCreateWithoutFinancialAnalysesInput>
    where?: AnalysisConfigWhereInput
  }

  export type AnalysisConfigUpdateToOneWithWhereWithoutFinancialAnalysesInput = {
    where?: AnalysisConfigWhereInput
    data: XOR<AnalysisConfigUpdateWithoutFinancialAnalysesInput, AnalysisConfigUncheckedUpdateWithoutFinancialAnalysesInput>
  }

  export type AnalysisConfigUpdateWithoutFinancialAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedConfigsNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutConfigNestedInput
  }

  export type AnalysisConfigUncheckedUpdateWithoutFinancialAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type FinancialPeriodUpsertWithWhereUniqueWithoutSourceAnalysisInput = {
    where: FinancialPeriodWhereUniqueInput
    update: XOR<FinancialPeriodUpdateWithoutSourceAnalysisInput, FinancialPeriodUncheckedUpdateWithoutSourceAnalysisInput>
    create: XOR<FinancialPeriodCreateWithoutSourceAnalysisInput, FinancialPeriodUncheckedCreateWithoutSourceAnalysisInput>
  }

  export type FinancialPeriodUpdateWithWhereUniqueWithoutSourceAnalysisInput = {
    where: FinancialPeriodWhereUniqueInput
    data: XOR<FinancialPeriodUpdateWithoutSourceAnalysisInput, FinancialPeriodUncheckedUpdateWithoutSourceAnalysisInput>
  }

  export type FinancialPeriodUpdateManyWithWhereWithoutSourceAnalysisInput = {
    where: FinancialPeriodScalarWhereInput
    data: XOR<FinancialPeriodUpdateManyMutationInput, FinancialPeriodUncheckedUpdateManyWithoutSourceAnalysisInput>
  }

  export type UserCreateWithoutFinancialPeriodsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutFinancialPeriodsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentUncheckedCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutFinancialPeriodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinancialPeriodsInput, UserUncheckedCreateWithoutFinancialPeriodsInput>
  }

  export type BusinessProfileCreateWithoutFinancialPeriodsInput = {
    id?: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBusinessProfileInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutBusinessProfileInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileUncheckedCreateWithoutFinancialPeriodsInput = {
    id?: string
    userId: string
    name: string
    sector: string
    sectorOther?: string | null
    address: string
    quarterlyRevenueTarget?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutBusinessProfileInput
  }

  export type BusinessProfileCreateOrConnectWithoutFinancialPeriodsInput = {
    where: BusinessProfileWhereUniqueInput
    create: XOR<BusinessProfileCreateWithoutFinancialPeriodsInput, BusinessProfileUncheckedCreateWithoutFinancialPeriodsInput>
  }

  export type FinancialAnalysisCreateWithoutPeriodsInput = {
    id?: string
    code: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFinancialAnalysesInput
    businessProfile: BusinessProfileCreateNestedOneWithoutFinancialAnalysesInput
    config: AnalysisConfigCreateNestedOneWithoutFinancialAnalysesInput
  }

  export type FinancialAnalysisUncheckedCreateWithoutPeriodsInput = {
    id?: string
    code: string
    userId: string
    businessProfileId: string
    configId: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
  }

  export type FinancialAnalysisCreateOrConnectWithoutPeriodsInput = {
    where: FinancialAnalysisWhereUniqueInput
    create: XOR<FinancialAnalysisCreateWithoutPeriodsInput, FinancialAnalysisUncheckedCreateWithoutPeriodsInput>
  }

  export type UserUpsertWithoutFinancialPeriodsInput = {
    update: XOR<UserUpdateWithoutFinancialPeriodsInput, UserUncheckedUpdateWithoutFinancialPeriodsInput>
    create: XOR<UserCreateWithoutFinancialPeriodsInput, UserUncheckedCreateWithoutFinancialPeriodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinancialPeriodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinancialPeriodsInput, UserUncheckedUpdateWithoutFinancialPeriodsInput>
  }

  export type UserUpdateWithoutFinancialPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFinancialPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUncheckedUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type BusinessProfileUpsertWithoutFinancialPeriodsInput = {
    update: XOR<BusinessProfileUpdateWithoutFinancialPeriodsInput, BusinessProfileUncheckedUpdateWithoutFinancialPeriodsInput>
    create: XOR<BusinessProfileCreateWithoutFinancialPeriodsInput, BusinessProfileUncheckedCreateWithoutFinancialPeriodsInput>
    where?: BusinessProfileWhereInput
  }

  export type BusinessProfileUpdateToOneWithWhereWithoutFinancialPeriodsInput = {
    where?: BusinessProfileWhereInput
    data: XOR<BusinessProfileUpdateWithoutFinancialPeriodsInput, BusinessProfileUncheckedUpdateWithoutFinancialPeriodsInput>
  }

  export type BusinessProfileUpdateWithoutFinancialPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusinessProfileNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutBusinessProfileNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutBusinessProfileNestedInput
  }

  export type BusinessProfileUncheckedUpdateWithoutFinancialPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    sectorOther?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    quarterlyRevenueTarget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutBusinessProfileNestedInput
  }

  export type FinancialAnalysisUpsertWithoutPeriodsInput = {
    update: XOR<FinancialAnalysisUpdateWithoutPeriodsInput, FinancialAnalysisUncheckedUpdateWithoutPeriodsInput>
    create: XOR<FinancialAnalysisCreateWithoutPeriodsInput, FinancialAnalysisUncheckedCreateWithoutPeriodsInput>
    where?: FinancialAnalysisWhereInput
  }

  export type FinancialAnalysisUpdateToOneWithWhereWithoutPeriodsInput = {
    where?: FinancialAnalysisWhereInput
    data: XOR<FinancialAnalysisUpdateWithoutPeriodsInput, FinancialAnalysisUncheckedUpdateWithoutPeriodsInput>
  }

  export type FinancialAnalysisUpdateWithoutPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    config?: AnalysisConfigUpdateOneRequiredWithoutFinancialAnalysesNestedInput
  }

  export type FinancialAnalysisUncheckedUpdateWithoutPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAiConsentInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutUserInput
    aiUsages?: AiUsageCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAiConsentInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutUserInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAiConsentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiConsentInput, UserUncheckedCreateWithoutAiConsentInput>
  }

  export type UserUpsertWithoutAiConsentInput = {
    update: XOR<UserUpdateWithoutAiConsentInput, UserUncheckedUpdateWithoutAiConsentInput>
    create: XOR<UserCreateWithoutAiConsentInput, UserUncheckedCreateWithoutAiConsentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiConsentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiConsentInput, UserUncheckedUpdateWithoutAiConsentInput>
  }

  export type UserUpdateWithoutAiConsentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutUserNestedInput
    aiUsages?: AiUsageUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAiConsentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutAiUsagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAiUsagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentUncheckedCreateNestedOneWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAiUsagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiUsagesInput, UserUncheckedCreateWithoutAiUsagesInput>
  }

  export type UserUpsertWithoutAiUsagesInput = {
    update: XOR<UserUpdateWithoutAiUsagesInput, UserUncheckedUpdateWithoutAiUsagesInput>
    create: XOR<UserCreateWithoutAiUsagesInput, UserUncheckedCreateWithoutAiUsagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiUsagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiUsagesInput, UserUncheckedUpdateWithoutAiUsagesInput>
  }

  export type UserUpdateWithoutAiUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAiUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUncheckedUpdateOneWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentUncheckedCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUncheckedUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    businessProfile?: BusinessProfileUncheckedCreateNestedOneWithoutUserInput
    locationAnalyses?: LocationAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalyses?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialPeriods?: FinancialPeriodUncheckedCreateNestedManyWithoutUserInput
    aiConsent?: AiConsentUncheckedCreateNestedOneWithoutUserInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    createdConfigs?: AnalysisConfigUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUncheckedUpdateOneWithoutUserNestedInput
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialPeriods?: FinancialPeriodUncheckedUpdateManyWithoutUserNestedInput
    aiConsent?: AiConsentUncheckedUpdateOneWithoutUserNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    createdConfigs?: AnalysisConfigUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type LocationAnalysisCreateManyUserInput = {
    id?: string
    code: string
    businessProfileId: string
    configId: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinancialAnalysisCreateManyUserInput = {
    id?: string
    code: string
    businessProfileId: string
    configId: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
  }

  export type FinancialPeriodCreateManyUserInput = {
    id?: string
    businessProfileId: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    sourceAnalysisId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiUsageCreateManyUserInput = {
    id?: string
    status: string
    contextUsed: boolean
    inputTokens?: number | null
    outputTokens?: number | null
    createdAt?: Date | string
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    role: $Enums.ChatRole
    content: string
    contextUsed?: boolean
    createdAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: bigint | number
    eventType: string
    level?: $Enums.LogLevel
    component?: string | null
    errorCode?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisConfigCreateManyCreatedByInput = {
    id?: string
    module: $Enums.ConfigModule
    versionNumber: number
    isActive?: boolean
    parameters: JsonNullValueInput | InputJsonValue
    note?: string | null
    activatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LocationAnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutLocationAnalysesNestedInput
    config?: AnalysisConfigUpdateOneRequiredWithoutLocationAnalysesNestedInput
  }

  export type LocationAnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    config?: AnalysisConfigUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    periods?: FinancialPeriodUpdateManyWithoutSourceAnalysisNestedInput
  }

  export type FinancialAnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    periods?: FinancialPeriodUncheckedUpdateManyWithoutSourceAnalysisNestedInput
  }

  export type FinancialAnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialPeriodUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutFinancialPeriodsNestedInput
    sourceAnalysis?: FinancialAnalysisUpdateOneRequiredWithoutPeriodsNestedInput
  }

  export type FinancialPeriodUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialPeriodUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    inputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    outputTokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    content?: StringFieldUpdateOperationsInput | string
    contextUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    component?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    component?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    eventType?: StringFieldUpdateOperationsInput | string
    level?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    component?: NullableStringFieldUpdateOperationsInput | string | null
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisConfigUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUpdateManyWithoutConfigNestedInput
    financialAnalyses?: FinancialAnalysisUpdateManyWithoutConfigNestedInput
  }

  export type AnalysisConfigUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAnalyses?: LocationAnalysisUncheckedUpdateManyWithoutConfigNestedInput
    financialAnalyses?: FinancialAnalysisUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type AnalysisConfigUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumConfigModuleFieldUpdateOperationsInput | $Enums.ConfigModule
    versionNumber?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parameters?: JsonNullValueInput | InputJsonValue
    note?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAnalysisCreateManyBusinessProfileInput = {
    id?: string
    code: string
    userId: string
    configId: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinancialAnalysisCreateManyBusinessProfileInput = {
    id?: string
    code: string
    userId: string
    configId: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
  }

  export type FinancialPeriodCreateManyBusinessProfileInput = {
    id?: string
    userId: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    sourceAnalysisId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationAnalysisUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationAnalysesNestedInput
    config?: AnalysisConfigUpdateOneRequiredWithoutLocationAnalysesNestedInput
  }

  export type LocationAnalysisUncheckedUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAnalysisUncheckedUpdateManyWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    config?: AnalysisConfigUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    periods?: FinancialPeriodUpdateManyWithoutSourceAnalysisNestedInput
  }

  export type FinancialAnalysisUncheckedUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    periods?: FinancialPeriodUncheckedUpdateManyWithoutSourceAnalysisNestedInput
  }

  export type FinancialAnalysisUncheckedUpdateManyWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialPeriodUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinancialPeriodsNestedInput
    sourceAnalysis?: FinancialAnalysisUpdateOneRequiredWithoutPeriodsNestedInput
  }

  export type FinancialPeriodUncheckedUpdateWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialPeriodUncheckedUpdateManyWithoutBusinessProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceAnalysisId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAnalysisCreateManyConfigInput = {
    id?: string
    code: string
    userId: string
    businessProfileId: string
    locationName: string
    district: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    rentCost: Decimal | DecimalJsLike | number | string
    competitorCount: number
    accessibility: number
    marketPotential: number
    score: Decimal | DecimalJsLike | number | string
    category: $Enums.LocationCategory
    details: JsonNullValueInput | InputJsonValue
    strongestFactor: string
    weakestFactor: string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinancialAnalysisCreateManyConfigInput = {
    id?: string
    code: string
    userId: string
    businessProfileId: string
    fileName: string
    periodStart: Date | string
    periodEnd: Date | string
    periodsAnalyzed: number
    ratios: JsonNullValueInput | InputJsonValue
    ruleResults: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex: Decimal | DecimalJsLike | number | string
    riskLevel: $Enums.RiskLevel
    createdAt?: Date | string
  }

  export type LocationAnalysisUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationAnalysesNestedInput
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutLocationAnalysesNestedInput
  }

  export type LocationAnalysisUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAnalysisUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    competitorCount?: IntFieldUpdateOperationsInput | number
    accessibility?: IntFieldUpdateOperationsInput | number
    marketPotential?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: EnumLocationCategoryFieldUpdateOperationsInput | $Enums.LocationCategory
    details?: JsonNullValueInput | InputJsonValue
    strongestFactor?: StringFieldUpdateOperationsInput | string
    weakestFactor?: StringFieldUpdateOperationsInput | string
    warnings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutFinancialAnalysesNestedInput
    periods?: FinancialPeriodUpdateManyWithoutSourceAnalysisNestedInput
  }

  export type FinancialAnalysisUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    periods?: FinancialPeriodUncheckedUpdateManyWithoutSourceAnalysisNestedInput
  }

  export type FinancialAnalysisUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    periodsAnalyzed?: IntFieldUpdateOperationsInput | number
    ratios?: JsonNullValueInput | InputJsonValue
    ruleResults?: JsonNullValueInput | InputJsonValue
    patterns?: JsonNullValueInput | InputJsonValue
    excludedRules?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    riskIndex?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialPeriodCreateManySourceAnalysisInput = {
    id?: string
    userId: string
    businessProfileId: string
    periodStart: Date | string
    revenue: Decimal | DecimalJsLike | number | string
    cogs: Decimal | DecimalJsLike | number | string
    operatingExpense: Decimal | DecimalJsLike | number | string
    netIncome: Decimal | DecimalJsLike | number | string
    currentAssets: Decimal | DecimalJsLike | number | string
    inventory: Decimal | DecimalJsLike | number | string
    totalAssets: Decimal | DecimalJsLike | number | string
    currentLiabilities: Decimal | DecimalJsLike | number | string
    totalLiabilities: Decimal | DecimalJsLike | number | string
    equity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialPeriodUpdateWithoutSourceAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinancialPeriodsNestedInput
    businessProfile?: BusinessProfileUpdateOneRequiredWithoutFinancialPeriodsNestedInput
  }

  export type FinancialPeriodUncheckedUpdateWithoutSourceAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialPeriodUncheckedUpdateManyWithoutSourceAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessProfileId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cogs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operatingExpense?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAssets?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalLiabilities?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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