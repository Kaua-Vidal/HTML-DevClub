/**
 * Vai alterar item por item e colocar em um novo array
 */

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 }
]

const newList = students.map(student => {
    return {
        name: student.name,
        testGrade: student.testGrade,
        status: student.testGrade >= 7 ? 'Aprovado' : 'Reprovado'
    }
})

console.log(newList)