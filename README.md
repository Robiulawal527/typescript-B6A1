"সহজ বাংলায় টাইপস্ক্রিপ্ট এর " interface বনাম type " এবং " keyof " কীওয়ার্ডের ব্যাখ্যা।"

১। ইন্টারফেস vs টাইপ

    interface :

        ফাংশন এবং অবজেক্টের স্ট্রাকচার ডিফাইন করতে ইন্টারফেস ব্যবহার করি.
        extends কিওয়ার্ড দিয়ে ইন্টারফেস এক্সটেন্ড করা সহজ এবং ন্যাচারাল.

        interface Person {
        name: string;
        }

        interface Student extends Person {
        id: number;
        }

        ইন্টারফেস এর প্রপার্টি গুলো ইনহেরিট করতে পারি.
        একই নামের একাধিক ইন্টারফেস সংজ্ঞায়িত করা সম্ভব.

    Type :

        Primitive, Union, Object, Function, Tuple, Literal এর জন্য টাইপ ব্যবহার করি.
        Intersection (&) ব্যবহার করে এক্সটেন্ড টাইপ এক্সটেন্ড করতে হয়.

        type Person = {
        name: string;
        };

        type Student = Person & {
        id: number;
        };


        Primitive বা Function Signature এর জন্য টাইপ এলিয়াস সংজ্ঞায়িত করতে সাধারণত টাইপ ব্যবহার করা হয়.

2. keyof

        keyof হলো একটি utility keyword, যা object type এর keys গুলোকে union type হিসেবে রিটার্ন করে।

        type Person = {
        name: string;
        age: number;
        location: string;
        };

        type PersonKeys = keyof Person;

        function getValue(obj: Person, key: PersonKeys) {
        return obj[key];
        }

        const p = { name: "Robi", age: 20, location: "Dhaka" };

        console.log(getValue(p, "age"));

        keyof Person object এর সব key (“name”, “age”, “location”) কে union type বানিয়ে ফেলে।

        ফলে ভুল key দিলে TypeScript আগে থেকেই error দেখাবে।
