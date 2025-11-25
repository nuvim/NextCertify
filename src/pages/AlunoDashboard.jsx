import { useState } from 'react';
import { Container, Row, Col, Card, Form, Table, Navbar, Nav, Badge } from 'react-bootstrap';
import { FaCloudUploadAlt, FaFilePdf, FaTrash, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import BotaoPrincipal from '../components/BotaoPrincipal'; // Reaproveitando seu botão!

function AlunoDashboard() {
  // Dados falsos para testar a tabela (Simulando o Banco de Dados)
  const [certificados, setCertificados] = useState([
    { id: 1, nome: 'Certificado React.pdf', evento: 'Semana Tech', horas: 10, status: 'Aprovado' },
    { id: 2, nome: 'Workshop Segurança.pdf', evento: 'CyberSec 2025', horas: 4, status: 'Pendente' },
    { id: 3, nome: 'Hackathon.pdf', evento: 'Evento Local', horas: 20, status: 'Rejeitado' },
  ]);

  const handleUpload = (e) => {
    e.preventDefault();
    alert("Botão de enviar clicado! (Lógica de upload entra aqui depois)");
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* --- 1. NAVBAR (Cabeçalho) --- */}
      <Navbar bg="white" expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-primary">
            NextCertify <span className="text-secondary fw-normal">| Aluno</span>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#" className="text-danger d-flex align-items-center gap-2">
               Sair <FaSignOutAlt />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        {/* --- 2. ÁREA DE UPLOAD --- */}
        <Row className="mb-4">
          <Col md={12}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-5 text-center">
                <div style={{ border: '2px dashed #dee2e6', borderRadius: '10px', padding: '40px' }}>
                    <FaCloudUploadAlt size={60} className="text-primary mb-3" />
                    <h3>Envie seu Certificado</h3>
                    <p className="text-muted">Arraste seu PDF aqui ou clique para selecionar</p>
                    
                    <Form onSubmit={handleUpload} className="d-flex justify-content-center flex-column align-items-center gap-3">
                        <Form.Control type="file" accept=".pdf" style={{ maxWidth: '400px' }} />
                        <div style={{ width: '200px' }}>
                            {/* Reusando seu componente de botão! */}
                            <BotaoPrincipal texto="Enviar Arquivo" type="submit" />
                        </div>
                    </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* --- 3. TABELA DE CERTIFICADOS --- */}
        <Row>
          <Col>
            <h4 className="mb-3">Meus Envios</h4>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-muted">Histórico</span>
                    {/* Campo de Busca Rápida (RF08) */}
                    <div className="input-group" style={{ maxWidth: '250px' }}>
                        <span className="input-group-text bg-light border-end-0"><FaSearch className="text-muted"/></span>
                        <input type="text" className="form-control border-start-0 bg-light" placeholder="Buscar..." />
                    </div>
                </div>
              </Card.Header>
              
              <Table responsive hover className="mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Arquivo</th>
                    <th>Evento</th>
                    <th>Horas</th>
                    <th>Status</th>
                    <th className="text-end">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {certificados.map((cert) => (
                    <tr key={cert.id}>
                      <td>
                        <div className="d-flex align-items-center gap-2 fw-medium">
                            <FaFilePdf className="text-danger" />
                            {cert.nome}
                        </div>
                      </td>
                      <td>{cert.evento}</td>
                      <td>{cert.horas}h</td>
                      <td>
                        <Badge bg={
                            cert.status === 'Aprovado' ? 'success' : 
                            cert.status === 'Rejeitado' ? 'danger' : 'warning'
                        }>
                          {cert.status}
                        </Badge>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-link text-danger p-0">
                            <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AlunoDashboard;