import { ProfileService } from "@/api/services/profile.service";
import CreateTeacher from "@/components/admin/createTeacher";

export default async function Admin() {
  const admin = await ProfileService.isAdmin();
  return (
    <div>
      {admin ? (
        <div>
          <p>You are admin</p>
          <div>
            <CreateTeacher />
          </div>
        </div>
      ) : (
        <p>You are user</p>
      )}
    </div>
  );
}
