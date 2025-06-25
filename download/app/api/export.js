import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";

export async function GET(request) {
  const doc = new jsPDF();
  doc.text("Exemplo de Exportação para PDF - Minha Obra Digital", 10, 10);
  
  // Mock function to simulate fetching work content
  const getWorkContent = (id) => {
    // In a real application, you would fetch this from your database
    if (id === '1') {
      return { title: 'Letras Vivas', author: 'Emerson José de Mello Mattos' };
    }
    if (id === '2') {
        return { title: 'Dom Casmurro', author: 'Machado de Assis' };
    }
    return null; // Work not found
  };

  try {
    const { searchParams } = new URL(request.url);
    const workId = searchParams.get('id');
    const workContent = getWorkContent(workId);

    if (!workContent) {
        return new NextResponse("Work not found", { status: 404 });
    }

    doc.text(workContent.title, 10, 30); // Add title
    doc.text(`Autor: ${workContent.author}`, 10, 40); // Add author
    
    const pdf = doc.output("arraybuffer");
    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${workContent.title.replace(/\\s+/g, '_')}.pdf`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new NextResponse("Error generating PDF", { status: 500 });
  }
}
