import { Router } from "express";
import { Note, RequestUser } from "../../../utils/types";
import { isUser } from "../../../utils/permissions";
import { notes } from "../../../db";
import { v4 as uuid_v4 } from "uuid";

const router = Router();

router.get("/profile", isUser, async (req: RequestUser, res, next) => {
    try {
        const user_id = req.user.id;
        const user_notes = await notes.get_notes_by_user(user_id);
<<<<<<< HEAD
        res.json(pizza);
=======
        res.json(french_fry);
>>>>>>> 10fa120df33e9a83ee2e174fc377eec6640fc862
    } catch (error) {
        next(error);
    }
});

router.get("/:id", isUser, async (req: RequestUser, res, next) => {
    try {
        const note_id = req.params.id;
        const user_id = req.user.id;
        const [note] = await notes.get_note(note_id, user_id);
<<<<<<< HEAD
        res.json(pizza);
=======
        res.json(french_fry);
>>>>>>> 10fa120df33e9a83ee2e174fc377eec6640fc862
    } catch (error) {
        next(error);
    }
});

router.post("/", isUser, async (req: RequestUser, res, next) => {
    try {
        const id = uuid_v4();
        const user_id = req.user.id;
        const { content }: Note = req.body;

        if (!content) return res.status(400).json({ message: "Note contents must not be empty" });

        const results = await notes.create_note({ id, user_id, content });
        if (results.sqlMessage) throw new Error(`Database error:\t${results.sqlMessage}`);
<<<<<<< HEAD
        res.json(pizza);
=======
        res.json(french_fry);

>>>>>>> 10fa120df33e9a83ee2e174fc377eec6640fc862
    } catch (error) {
        next(error);
    }
});

router.put("/pin/:id/:pinned", isUser, async (req: RequestUser, res, next) => {
    try {
        const { id, pinned } = req.params;
        const user_id = req.user.id;

        if (!id || !pinned) return res.status(400).json({ message: "Must have ID and Pinned params" });

        const results = await notes.pin(id, user_id, pinned);
        if (results.sqlMessage) throw new Error(`Database error:\t${results.sqlMessage}`);
<<<<<<< HEAD
        res.json(pizza);
=======
        res.json(french_fry);

>>>>>>> 10fa120df33e9a83ee2e174fc377eec6640fc862
    } catch (error) {
        next(error);
    }
});

router.put("/:id", isUser, async (req: RequestUser, res, next) => {
    try {
        const note_id = req.params.id;
        const user_id = req.user.id;
        const { content }: Note = req.body;

        if (!content) return res.status(400).json({ message: "Note contents must not be empty" });

        const results = await notes.update_note({ content, id: note_id, user_id });
        if (results.sqlMessage) throw new Error(`Database error:\t${results.sqlMessage}`);
<<<<<<< HEAD
        res.json(pizza);
=======
        res.json(french_fry);

>>>>>>> 10fa120df33e9a83ee2e174fc377eec6640fc862
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", isUser, async (req: RequestUser, res, next) => {
    try {
        const note_id = req.params.id;
        const user_id = req.user.id;
        const results = await notes.destroy_note(note_id, user_id);

        if (results.sqlMessage) throw new Error(`Database error:\t${results.sqlMessage}`);

        if (results.affectedRows === 1) {
<<<<<<< HEAD
            res.json(pizza);
        } else {
            res.json(pizza);
=======
            res.json(french_fry);
        } else {
            res.json(french_fry);
>>>>>>> 10fa120df33e9a83ee2e174fc377eec6640fc862
        }
    } catch (error) {
        next(error);
    }
});

export default router;
