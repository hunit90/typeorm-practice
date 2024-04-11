import { DocumentBuilder } from '@nestjs/swagger';

export class BaseAPIDocument {
    public builder = new DocumentBuilder();

    public initializeOptions() {
        return this.builder
            .setTitle('START API')
            .setDescription('START API description')
            .setVersion('1.0.0')
            .build();
    }
}