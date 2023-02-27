import {
    Schema,
    SchemaFactory,
    Prop
  } from "@nestjs/mongoose";
  import {
    Document
  } from 'mongoose';
  
  export type RotineDocument = Rotine & Document;
  
  @Schema()
  export class Rotine {
          @Prop({
            required: true
          })
          nomeRotina: string;
          @Prop({
            required: true
          })
          rotinaUserId: string;
          @Prop({
            required: false
          })
          tipoRotina: string;
          @Prop({
            required: false
          })
          listaID: string;
          @Prop({
            required: false
          })


          qtdDias: string;
          @Prop({
            required: false
          }) 
          momentoAgendamento: string;
          @Prop({
            required: false
          })
          horaAgendamento: string;
          @Prop({
            required: false
          })
          minutoAgendamento: string;
          @Prop({
            required: false
          })
          campoAssunto: string;
          @Prop({
            required: false
          })
          campoNomeFrom: string;
          @Prop({
            required: false
          })
          campoEmailFrom: string;
          @Prop({
            required: false
          })
 
          diasData : string;
          @Prop({
            required: false
          })

          momentoData : string;
          @Prop({
            required: false
          })

          tipoInteracao : string;
          @Prop({
            required: false
          })

          diaMes : string; 
          @Prop({
            required: false
          })

          diaSemana : string; 
          @Prop({
            required: false
          })

          frequencia : string;
          @Prop({
            required: false
          })

          diasDataMomento: string;
          @Prop({
            required: false
          })

          definaTempo: string;
          @Prop({
            required: false
          })

          tempoEnviarEmail: string;
          @Prop({
            required: false
          })

          tipoTempo: string;
          @Prop({
            required: false
          })
          
          statusRotina: string;
          @Prop({
            required: false
          })

        totalEnviados : number ;  
        @Prop({
          required: false
        })

        totalEntregues : number;
        @Prop({
          required: false
        })

        totalBloqueados : number; 
        @Prop({
          required: false
        })

        totalAbertos : number;
        @Prop({
          required: false
        })

        totalClicados : number; 
        @Prop({
          required: false
        })

          createDate: string;
          @Prop({
            required: false
          })
          lastUpdate: string; 
  }

 

  export const RotineSchema = SchemaFactory.createForClass(Rotine);