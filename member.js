function skillsMember() {
    const member = {
        name: 'Nathan',
        age: 24,
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Node',
            'Git',
            'SQL'
        ],
        isCool: true,
        favColor: 'blue',
        sayHi: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`)
        }
    }
    
    console.log(member.name)
    console.log(member.age)
    console.log(member.isCool)
    console.log(member.favColor)
    member.sayHi()
    
    // I want to console.log my skills array
    // I want to console.log my second skill
    // I want to console.log my last skill
    console.log(member.skills)
    console.log(member.skills[1])
    console.log(member.skills[member.skills.length - 1])
    
    // I want to add a new skill to my skills array
    member.skills.push('Python')
    console.log(member.skills)
    
    // I want to remove the first skill from my skills array
    member.skills.shift()
    console.log(member.skills)
    
    // I want to remove the last skill from my skills array
    member.skills.pop()
    console.log(member.skills)
    
    // I want to add a new key value pair to my member object
    member.isMarried = false
    console.log(member)
    
    // I want to delete the favColor key value pair from my member object
    delete member.favColor
    console.log(member)
    
    // I want to change the age of my member object
    member.age = 100
    console.log(member)
    
    // I want to add a new key value pair to my member object
    member.favFood = 'Pizza'
    console.log(member)
    
    // I want to call my sayHi function
    member.sayHi()
}