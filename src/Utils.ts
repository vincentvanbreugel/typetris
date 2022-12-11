export class Utils {
    static sleep(ms: number): Promise<number> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
