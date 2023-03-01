import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserInputDTO } from "../../src/dtos/userDTO"
import { USER_ROLES } from "../../src/types"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("delete", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("deve conter uma mensagem de acerto", async () => {
        const input: DeleteUserInputDTO = {
            idToDelete: "id-mock-normal",
            token: "token-mock-admin"
        }
            
        const result = await userBusiness.deleteUser(input)
        expect(result).toBe("Usuário deletado")
        })


    })
