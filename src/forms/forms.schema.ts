import {
    Schema,
    SchemaFactory,
    Prop
  } from "@nestjs/mongoose";
  import {
    Document
  } from 'mongoose';
  
  export type FormDocument = Form & Document;
  
  @Schema()
  export class Form {
          @Prop({
            required: true
          })
          formName: string;
          @Prop({
            required: true
          })
          formUserId: string;
          @Prop({
            required: false
          })
          formType: string;
          @Prop({
            required: false
          })
          formListId: string;
          @Prop({
            required: false
          })

        
      
          textoPrincipal: string;
          @Prop({
            required: false
          }) 
          descricao: string;
          @Prop({
            required: false
          })
          fundoGeral: string;
          @Prop({
            required: false
          })
          fundoConteudo: string;
          @Prop({
            required: false
          })
          corTexto: string;
          @Prop({
            required: false
          })
          corBorda: string;
          @Prop({
            required: false
          })
          corBotao: string;
          @Prop({
            required: false
          })
          corTextoBotao: string;
          @Prop({
            required: false
          })
          corBordaBotao: string;
          @Prop({
            required: false
          })
          modeloTemplate: string;
          @Prop({
            required: false
          })
          backgroundImage: string;
          @Prop({
            required: false
          })
          backgroundRepeat: string;
          @Prop({
            required: false
          })
          backgroundPosition: string;
          @Prop({
            required: false
          })
          tamanhoFonteTitulo: string;
          @Prop({
            required: false
          })
          tamanhoFonteDescricao: string;
          @Prop({
            required: false
          })
          tipoFonte: string;
          @Prop({
            required: false
          })
          botaoFechar: string;
          @Prop({
            required: false
          })
          fundoCampoTexto: string;
          @Prop({
            required: false
          })
          corCampoTexto: string;
          @Prop({
            required: false
          })
          bordaCampoTexto: string;
          @Prop({
            required: false
          })
          barPos: string;
          @Prop({
            required: false
          })

          intervaloMinimo  : string;
          @Prop({
            required: false
          })
          qtdVisitas : string;
          @Prop({
            required: false
          })
          scrollOpt : string;
          @Prop({
            required: false
          })
          sairOpt : string;

          @Prop({
            required: false
          })
          totalInscritos: number;
          @Prop({
            required: false
          })
          totalVisitantes: number;
          @Prop({
            required: false
          })
          createDate: string;
          @Prop({
            required: false
          })
          lastUpdate: string; 
  }

 

  export const FormSchema = SchemaFactory.createForClass(Form);