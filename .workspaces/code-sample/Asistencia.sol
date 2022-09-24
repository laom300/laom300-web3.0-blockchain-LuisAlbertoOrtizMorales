// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract CertificadoAsistencia {
    struct  Alumno {
      string nombreEst;
      uint fechaParticipacion;
      bool asistio;
   }

    mapping (
    uint => Alumno) public alumnos; 
    string public nombreCls;
    uint public fechaCurso;

    constructor(string memory nombreC){
        nombreCls = nombreC; //Set curso del que se toma asistencia
        fechaCurso = block.timestamp;//Fecha del curso
    }

    function guardarCertificado(string memory nombreE, uint codigoE) public {
        Alumno memory estudiante = Alumno(nombreE, fechaCurso, true);
        alumnos[codigoE] = estudiante;
    }

    function cosultarCertificado(uint codigoE) public  view returns (bool) {
        return alumnos[codigoE].asistio;
    }
}