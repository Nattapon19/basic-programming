const friendsArray = [
    {
        firstName: "Harry",
        lastName: "Potter",
        age: 25,
        height: 180,
        phone : "06574299xx"
    },{
        firstName: "degoo",
        lastName: "Potter",
        age: 25,
        height: 170,
        phone : "06xx4299xx"
    },{
        firstName: "Chomphunuch",
        lastName: "Panya",
        age: 21,
        height: 170,
        phone : "06364299xx"
    },{
        firstName: "Rawiwan",
        lastName: "Changda",
        age: 20,
        height: 170,
        phone : "09874299xx"
    }
]

const friendsArrayPhoneNumber = friendsArray.map(function(element, index) {
    return ({
        firstName : element.firstName,
        lastName : element.lastName,
        phone : element.phone
    })
})

const friendmorethan = friendsArray.filter(function(element,index){
    return Number(element.age) >14 && element.height > 170

})

const database = [
    {
        "year": 2024,
        "weeknum": 34,
        "province": "บุรีรัมย์",
        "new_case": 6,
        "total_case": 578,
        "new_case_excludeabroad": 6,
        "total_case_excludeabroad": 578,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สุรินทร์",
        "new_case": 16,
        "total_case": 702,
        "new_case_excludeabroad": 16,
        "total_case_excludeabroad": 702,
        "new_death": 0,
        "total_death": 11,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ตราด",
        "new_case": 2,
        "total_case": 335,
        "new_case_excludeabroad": 2,
        "total_case_excludeabroad": 335,
        "new_death": 0,
        "total_death": 4,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สงขลา",
        "new_case": 10,
        "total_case": 1029,
        "new_case_excludeabroad": 10,
        "total_case_excludeabroad": 1029,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "เพชรบูรณ์",
        "new_case": 1,
        "total_case": 413,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 413,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "พิษณุโลก",
        "new_case": 13,
        "total_case": 483,
        "new_case_excludeabroad": 13,
        "total_case_excludeabroad": 483,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "กาฬสินธุ์",
        "new_case": 3,
        "total_case": 237,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 237,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ราชบุรี",
        "new_case": 5,
        "total_case": 591,
        "new_case_excludeabroad": 5,
        "total_case_excludeabroad": 591,
        "new_death": 0,
        "total_death": 7,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ระนอง",
        "new_case": 0,
        "total_case": 4,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 4,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "เชียงราย",
        "new_case": 1,
        "total_case": 188,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 188,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สตูล",
        "new_case": 0,
        "total_case": 12,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 12,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ยะลา",
        "new_case": 1,
        "total_case": 107,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 107,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ชลบุรี",
        "new_case": 12,
        "total_case": 3011,
        "new_case_excludeabroad": 12,
        "total_case_excludeabroad": 3011,
        "new_death": 0,
        "total_death": 18,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สระบุรี",
        "new_case": 3,
        "total_case": 287,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 287,
        "new_death": 0,
        "total_death": 7,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "อ่างทอง",
        "new_case": 0,
        "total_case": 136,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 136,
        "new_death": 0,
        "total_death": 5,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ระยอง",
        "new_case": 2,
        "total_case": 461,
        "new_case_excludeabroad": 2,
        "total_case_excludeabroad": 461,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ชัยนาท",
        "new_case": 0,
        "total_case": 45,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 45,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ประจวบคีรีขันธ์",
        "new_case": 1,
        "total_case": 240,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 240,
        "new_death": 0,
        "total_death": 4,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สกลนคร",
        "new_case": 3,
        "total_case": 81,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 81,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นราธิวาส",
        "new_case": 0,
        "total_case": 66,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 66,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ปัตตานี",
        "new_case": 0,
        "total_case": 29,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 29,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "อำนาจเจริญ",
        "new_case": 0,
        "total_case": 48,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 48,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "พัทลุง",
        "new_case": 0,
        "total_case": 155,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 155,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ปทุมธานี",
        "new_case": 2,
        "total_case": 671,
        "new_case_excludeabroad": 2,
        "total_case_excludeabroad": 671,
        "new_death": 0,
        "total_death": 3,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ฉะเชิงเทรา",
        "new_case": 1,
        "total_case": 267,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 267,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "จันทบุรี",
        "new_case": 4,
        "total_case": 765,
        "new_case_excludeabroad": 4,
        "total_case_excludeabroad": 765,
        "new_death": 0,
        "total_death": 6,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "แม่ฮ่องสอน",
        "new_case": 0,
        "total_case": 41,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 41,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นครพนม",
        "new_case": 0,
        "total_case": 145,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 145,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "แพร่",
        "new_case": 0,
        "total_case": 137,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 137,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สมุทรปราการ",
        "new_case": 3,
        "total_case": 696,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 696,
        "new_death": 0,
        "total_death": 6,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นครนายก",
        "new_case": 0,
        "total_case": 20,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 20,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "เลย",
        "new_case": 1,
        "total_case": 477,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 477,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    } 
]
const deatachMoreFiveDatabase = database.filter(function(element,index) {
    return element.total_death > 5 && element.province !== 'ทั้งประเทศ'
}).map(function (element, index) {
    return ({
        province: element.province
//        total_death: element.total_death
    }) 
})

//const deatachMoreFiveDatabaseOnlyprovine = deatachMoreFiveDatabase.map(function(element,index) {
//    return ({
//        province: element.province,
//        total_death: element.total_death
//    })
//})
//console.log(deatachMoreFiveDatabase)