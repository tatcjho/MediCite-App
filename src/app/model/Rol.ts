export class Rol {
    
    private uid: string;
    private descripcion: string;

    public getUid(): string {
        return this.uid;
    }

    public setUid(uid: string): void {
        this.uid = uid;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
    
}