import { FaCircleLeft, FaCircleInfo } from 'react-icons/fa6';
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import createTaskImg from '../assets/images/create-task-page.png';
import singleTaskImg from '../assets/images/simple-task.png';
import taskOverdueImg from '../assets/images/task-overdue.png';
import taskDueSoonImg from '../assets/images/task-due-soon.png';

function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header title={'About'} icon={<FaCircleInfo />} />
            <div className="m-6 mb-20 space-y-4">
                <div className="space-y-2">
                    <h1 className="font-bold text-4xl">Welcome to Pinboard!</h1>
                    <p>
                        Pinboard is a simple web application designed to help
                        students manage their class assignments. It purposefully
                        has a simple design so as to not be overwhelming. This
                        page will take you through the basics of using Pinboard.
                    </p>
                    <p>
                        Another thing to note about Pinboard is that it is
                        designed to be used on a mobile device. Therefore, it is
                        recommended to bookmark the webpage on your phone for
                        the best experience. However, the desktop version is
                        still fully functional.
                    </p>
                </div>
                <div className="space-y-2">
                    <h2 className=" font-bold text-3xl">Logging-In</h2>
                    <p>
                        The first thing to note is that Pinboard requires you to
                        create an account. The sign-up process and quick and
                        easy. On the homepage, clicking the
                        <span className="font-bold"> Sign In</span> button will
                        redirect you to the sign-in page, where you can either
                        login with an existing account or create a new one by
                        clicking the
                        <span className="font-bold"> Sign Up Instead</span>{' '}
                        link. Once you've created an account, you'll be
                        redirected back to the Home page.
                    </p>
                </div>
                <div className="space-y-2">
                    <h2 className=" font-bold text-3xl">
                        Tasks and Assignments Pages
                    </h2>
                    <p>
                        From the homepage, you can see two buttons:{' '}
                        <span className="font-bold">Tasks</span> and{' '}
                        <span className="font-bold">Manage Assignments</span>.
                        Clicking on either of these buttons will take you to the
                        respective page.
                    </p>
                    <p>
                        The{' '}
                        <span className="font-bold">Manage Assignments</span>{' '}
                        page is meant to be used as a place to house all your
                        current, pending assignments. Clicking the{' '}
                        <span className="font-bold">+</span> icon will allow you
                        to create a new assignment and add it to the list. We'll
                        talk more about individual assignments later on. The{' '}
                        <span className="font-bold">Tasks</span> page is where
                        all your assignments for the current day will be. This
                        is built like a traditional to-do list where you can
                        check-off assignments as you complete them. It too
                        allows you to add new assignments to the list.
                    </p>
                    <p>
                        I refer to any assignment on the{' '}
                        <span className="font-bold">Tasks</span> page as a task
                        because it is meant to be something you must complete
                        and check-off. Assignments are something that are
                        assigned to you and still pending, but haven't been
                        moved to the <span className="font-bold">Tasks</span>{' '}
                        page yet to be completed.
                    </p>
                </div>
                <div className="space-y-2">
                    <h2 className=" font-bold text-3xl">
                        A Single Assignment Object
                    </h2>
                    <img
                        src={singleTaskImg}
                        alt="a screenshot of a single assignment objext on pinboard"
                        className="border-2 border-light-blue rounded-md"
                    />
                    <p>
                        A single assignment object can be created by clicking
                        the <span className="font-bold">+</span> icon on either
                        the <span className="font-bold">Tasks</span> or{' '}
                        <span className="font-bold">Manage Assignments</span>{' '}
                        pages. The page will redirect you to a form that looks
                        like this:
                    </p>
                    <img
                        src={createTaskImg}
                        alt="a screenshot of the create task page of pinboard"
                        className="border-2 border-light-blue rounded-md"
                    />
                    <p>
                        When entering a class, you can give it a custom color to
                        easily identify assignments from the same class. You can
                        click the color palette icon to choose a color you've
                        already used previously. New colors that you select will
                        be added here automatically.
                    </p>
                    <p>
                        After clicking <span className="font-bold">Create</span>
                        , the new assignment will be added to the list
                        instantly.
                    </p>
                    <h3 className="text-2xl italic font-semibold">
                        Assignment options menu
                    </h3>
                    <p>
                        Each assignment has an options menu that can be accessed
                        by clicking the <span className="font-bold">...</span>{' '}
                        icon on the far left. This menu allows you to move the
                        assignment between the{' '}
                        <span className="font-bold">Tasks</span> and{' '}
                        <span className="font-bold">Manage Assignments</span>{' '}
                        pages, or delete it completely.
                    </p>
                    <h3 className="text-2xl italic font-semibold">
                        Assignment due dates
                    </h3>
                    <p>
                        When an there is less than 2 days remaining until the
                        due date of an assignment, a little yellow warning icon
                        will appear next to the due date to remind you that it's
                        due soon.
                    </p>
                    <img
                        src={taskDueSoonImg}
                        alt="a screenshot of a task that is due soon"
                        className="border-2 border-light-blue rounded-md"
                    />
                    <p>
                        When the due date has passed, a red warning icon will
                        appear instead. This is to help you keep track of your
                        assignments and ensure that you don't miss any
                        deadlines.
                    </p>
                    <img
                        src={taskOverdueImg}
                        alt="a screenshot of a task that is overdue"
                        className="border-2 border-light-blue rounded-md"
                    />
                </div>
                <div className="space-y-2">
                    <h2 className=" font-bold text-3xl">The Purge Feature</h2>
                    <p>
                        The purge feature is a way to quickly reset your Tasks
                        page at the end of a day so that it is ready to be
                        filled up the next day. It is automatically enabled on
                        the <span className="font-bold">Tasks</span> page.
                    </p>
                    <p>
                        At the end of the day, - at 12am Midnight - the{' '}
                        <span className="font-bold">Tasks</span> page will be
                        cleared of all tasks. Those that have been checked-off
                        will be permanently deleted, while those that are still
                        pending will be moved to the{' '}
                        <span className="font-bold">Manage Assignments</span>{' '}
                        page. This is to ensure that you have a clean slate to
                        work with the next day.
                    </p>
                </div>
            </div>

            <PageFooter buttons={[{ route: '/', icon: <FaCircleLeft /> }]} />
        </div>
    );
}
export default About;
