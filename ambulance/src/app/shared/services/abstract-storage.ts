export abstract class AbstractStorage {
  cast(value: object): string {
    return JSON.stringify(value);
  }

  abstract save(property: string, value: string | object): void;
  abstract get(property: string): string | null;
  abstract clear(): void;
}
