import { ApiProperty } from "@nestjs/swagger";

export class CreateClientesDto{

    
    @ApiProperty({
        description: 'ID do Sistema'
        
    })
    idSistema: string;
    
    @ApiProperty({
        description: 'nome do cliente',
        example: 'Felipe Cristo'
    })
    nome: string;
    
    @ApiProperty({
        description: 'ID da Franquia'
        
    })
    idFranquia: string;
    
    @ApiProperty({
        description: 'Data de quanto o cliente entrou',
        example: '28/09/1990'
    })
    dataInicio: string;
    
    @ApiProperty({
        description: 'Data de quanto o cliente saiu',
        example: '24/04/2023'
    })
    dataFinal: string;
   
}

