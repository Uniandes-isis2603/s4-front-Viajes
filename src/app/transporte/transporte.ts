/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export interface Transporte{
    

    /**
     * Costo del transporte
     */
    costo: number;

    /**
     * Destino del transporte
     */
    destino: string;
    
    /**
     * Latitud origen
     */
    latitudOrigen: number; 
     
    /**
     * Longitud origen
     */
    longitudOrigen: number; 
     
     /**
      * Latitud destino
      */ 
    latitudDestino: number; 
      
     /**
      * Longitud destino 
      */
    longitudDestino: number;
       
     /**
      * Numero de dias de viaje
      */
    numeroDias: number; 
     
     /**
      * Numero de horas de viaje
      */
     numeroHoras: number; 
      
     /**
      * Numero de minutos de viaje.
      */
     numeroMinutos: number; 
      
     /**
      * Puntuacion del transporte
      */
     puntuacion: number; 
     
     /**
      * Id del transporte
      */
     id: number; 
}