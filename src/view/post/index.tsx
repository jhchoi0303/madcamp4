import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";

const Post: React.FC = () => {
  return (
    <Layout>
      <S.Post>
        <S.PostContainer>
          <S.TitleContainer>
            <S.Title>게시판</S.Title>
          </S.TitleContainer>
          <S.PostTitleContainer>
            <S.PostTitle>앨범 제목</S.PostTitle>
          </S.PostTitleContainer>
          <S.PostMetaContainer>
            <S.PostWriter>아티스트 이름</S.PostWriter>
          </S.PostMetaContainer>
          <S.PostContentContainer>
            <S.PostContent>
              <div>겁이나 겁이나 예아~</div>
            </S.PostContent>

            <S.PostAlbumContainer>
              <S.PostAlbum src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQEBISFRUVFRUVEBUVFRUVFRAVFRUWGBUXFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICYtLS8tLS0tLS0tLS0tLi0tLS0tLS0tLS0tLS0tLS0vLS0vLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEkQAAIBAgQDBQMHCAgEBwAAAAECAAMRBBIhMQVBUQYTImFxMoGRBxQjc6GxsyRCUmKywcLRFSUzNENyg/AWNVOCRGOToqPS8f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAA1EQACAQIDBAcIAwEBAQEAAAAAAQIDEQQhMQUSQVETFGFxgbHBFSIyM5Gh0fAjQlLh8YJy/9oADAMBAAIRAxEAPwD0adU5gQAIwCABABIAEACAAIALEMDAQkYBAAgAQASABaABGAkAEgAQAIwGmMBpjAaYCGmAAIxixDCAFuVCCABAAgAQAIwCACQAIALAAgAkAFgAkACABABIAEAEjAIAJABDGAkYCGADTGIaYAJeMYXgAQGXJSIWACQAIAEACABAAjASACiABAAgAQAIgEjAIAEACACQAIANMYCRgBEAEjAaRGA0wENjGJaMAgBdlIBEAsAM+vj2Ws1IAWFNHvre7NUBHp4B8ZlxFeVK1jp7PwMMSpOTatyF+fN0H2zL16fJHS9jUf8AT+34EOOboPth16fJD9jUeb+34GHiD9F+3+cXXqnJD9jYfm/qvwNPEX6L8D/OLr1TsJexsP2/X/go4g/6vwi69V7A9j4ft+ovz5/L4Q67V7B+yMN2/UUYx/L4Q65VH7Jw3J/UX52/l8Idcq8w9lYbk/qxfnL9fsi65V5h7Lw3+fuxfnDdfsh1urzD2Zhv8/d/kPnDdYdbq8x+zcN/n7v8iis3WLrVXn9kL2dhv8fd/kO9brDrVXn5B7Ow3+PMO9brDrNX/XkP2fhv8L7i943WHWav+g6hh/8ACFznrDrFX/QdRw/+EGY9YdYqf6YdSw/+ETLtOtRbcE2eaxUVGtJRWVxZaUCRgMaMBsYhIAFo7jC0LjLcqELEAQAw8c35W31FH8SvOdjv6+Poeg2JpPw9QzTnndELRANLQAjdoEhgqRDsWcHSqVCRTUtbe2w9TsPfJKLehRVrU6fxuxebhWIUXNM+4qx+AMluSKo4yi/7FY6aH3+UgaL3zQoMAHCMQsBDhAQQEEAFgA6MQojEWV2HpO5Q+XHuR5HF/Pn3sJaZxIwEMaAaRGA2ABAAgBblQCQAWAHP8UP5W31FH8SvOdj/AOvj6HoNh6T8PUl4ZhHrVMi2AABqMfzQbgWH5zGx002OuwOKFNyVzp4nFxoWVrtmzX7OeEZKni55hZT6W1H2yTpcjHT2k7+/HLsOexdNqblHFmG/7vdKWrOx1ac41IqUdBuDw1Ss4SmLnTM2uWmDzY8vTnHGDkyGIxEKMbvXkdRQ7M0AtnLueZvlsf1QNveTLlTiciW0azeVl4fk1sNQSmgRFCqNgP8Aep85MxNtu7JbwEZ3FeHI4apqGCk3H51hpf4SEop5mzC4mdNqHC5zKmUHdHgwIigwAWAhbxiAGACiAh0AFjEWV2HpO9R+XHuPH4r58+9hLDOEYxDGAkYDSIAJABYAWpUAQAIAc7xf+9N9RS/ErznY/wDr4+h6DYelTw9Toex9Ne5Z7DMajKTzIU6C/QXPxlEfhRHGybryT4fg3ozIc72j4NVq1BUo5SctmDHLqNtfO9tuUqnC7ujpYPGRpQcZeBp8D4d83pd2WzEsWY2tq3Lc7WA90mlZWMdeq6s3PmX5IqCIAgBHig5RghAaxyk7XiZOm4qSctDlMTw6rSF3XT9IG49/T3yhxaO9SxVOrlF58iAGRNAt4hBngFhveQHYctSArDw0ZFoeDGIdGItrsJ3qXwR7keNxPzp978xDLSgSACRgEYCNABhgMIwLd5UILxWC4XgBznF/7031NL8SvOdj/wCvj6Hodh6T8PU6Tsd/dz9a/wC6UR+FFeM+fPw8kbkZmCAwiASABEAsBiwARgCCCLg6EHmIAm07oxMfwRVQtTJGUEkHXNbU68jK5QXA6WHx8nJRnx4mEWlJ1yNmiJJDsHRarVWipALBmJOyqpUMbczdlsNN95OEN5mbFYhUI3tdvQ6aj2forYkuxBubkWbyIA28vKXKEUcipj601a9u40xRQDKFW3Swt8JMyb8r3uzF4jword6eq7leY9OolUocUdTDYxStGevMzBKzeWwdJ6Gn8C7jxeI+bPvfmITLCm4XgAl4AF4AITGAwxoLheMkWc0qI3C8AC8AOJ7ccbTC1SxGZ2o0xSXkSHrXJPIC4+MwY2G9u+Pod7Y092NTw9Tp/kqxb1eGrVqG7NVrFja3+IQNPQATO0kkkQxEm6sm/wByOukSkIhhEBDi8UlNczmy3AJOwvoLnkLyFSpGCvLQspUp1ZbsFdkwMlcgV+I4ruqTVMrNlF7LYt0uL9N/dK6s9yDla9i7D0ulqxhdK/PT9Zh9jeJu6nD1QxamLhiLHLoArc76n3Tn7OxMpp056ryOntfCQhJVoaS4dvNHSk85027ZnGtcrUcbRqCwZTe6kXHoRpz5TLSx1GpZXs3weRY6U4O64HF4jwuy66EgX0NgdLj0kmrM9JTe9FSIbkmyqzMb2VRdmsLmwEEm3kE6kaavJ2R1/Z3h70KZFQLmZi5sbkXA8JNtbWA00+86oqysedxNZVajkvuat4zOEACAHO8Zo5apNrBtR0JsM32/fKZqzO3gqm9TSvmv1EaKzaICxuAbbLe3tHkNb+k7qqRhBX5HlakZSqytzfmOqUiGKC7EG3hBMmppxUnkUtWlurPuGVFZTZgQehkotSV0JpxyaGZpKwriZo7BcQtHYLjS0dhCZoAWbyqwC5oWHcM0LBc8t+Vw/lNH6n+NpjxXA7WydJ+HqegfI7/ymn9ZW/EaY58B1/mS/eB2sgVhEAkQyrxKjnoupQVLj2Ccua2ujWNj085TXjvU2rX7C/DT3KsZb2726nI9nMdVp16dKtUemmUlUqXAIYeEa7DTTzBGl5xsHVq06qp1W0rZJnodoUKdWjKpSipSvm12PP8A6dzO6eYOY4+fm+KpYhM3j8NVV0DhSo1PUgjT9UTk4x9BiIVVxyfadvArrGGnQlbLNN8L3+35OixbWpt6Eaeek3YuTjQm0s7M5FFXqK/M5jgPBKSYgVAWOXOVDEXDtcE6WB9o8vPecnZ9SdWqt61l6aKxqr0lCDaOgxvCqNVg9RSSBbQlfjaxJH753nFPUz0sVVpK0Hl4epDwvgVGgzOmdmY3BqNnNMWAK0yRdV0v7/S0kktCFXEVKvxu5pM4G5A9ZKxQ2lqAYR7rC4Zj0+MN0LvkJmPl9/8AKFkSUWyLEYVXtnF7XtyAva+3pBpPgWU5zp33ZajqWHRRZVUc9BzO5knOT4kFCPIkZgBckAeegkc2SukYHGH+l/7V+686uEX8ZzMU/wCTwKOaarGa4haFgELR2AYXjsAZ47AWs0psFwzQsFxQ0LBc8w+Vr+8Ufqv42mLFcDt7I0n4ep6B8j3/ACmn9ZW/EaYp8CVb5kv3gdrIFYRARU66sWVSCVNmHSJoSaZJESMvtFwkYilp/aLc0zyN91J6H77THjcKq8LcVob9n4x4apn8L1/Jn8D426kYfErUzhsobLfKCBlD2+/oR6zNg8VUT6GtF3XG3ma8dgqck61CS3bXtfy/A7tlgalZKYpIzkMwNuQI5303Ak9o4adaMdxXaZDZGKpUZT6SVlZcDew1RiilkKsVBZbg5TbUX526zpQjJxTeTOVVsptRzV9efaV62DZnLFgAbbC5089PP4ympg1Oe82W08RKMbWLYB6/C377zUopGZp8wydb/E/cNJLQW6OVByAhcaSWgVHVRdiAOpIH3wSb0CUktWZ2J4/hEvmrobclOc/BbzTDB15aRfjkY6m0MNDWa8M/Iq4btVhqjimneEnMblbABVLG+vRTJ1Nn1oRcpW/ciFLatCrNQhe77Oy5hYnt3U/w6KL0zEsfgLTdDZMV8Un4HLqbem/ggvHP8GJje0+Mqb1mUdKfg+1dZqhgaEP6378zDU2nian9rd2QztbiHb5uGZmthaROYknM2ZiTfnqJXhYpb7S/sy7Hzk+jTf8ARfVnZcTH0luioPggmbDfLXj5nYr/AB/TyKhl5QNMYxpEYhIxiRgXssz3HYMsLhYcFiuM8v8AlbH5RR+q/jaY8VovH0O1snSfh6nc/JXWKcFVxuHrkX+sMySV2kLEytOTR2WBxRdAzIVP2HzHlIyhZlVObkr2J3Y20tfkTsPdI2J2kZmC4T3b5+8Ysd7AANrcg7yTaZCFFp3uacjZFu72hb/e8A3UKIEgJsLnQdTtGFyvW4jRVWc1Usts5DA5cxstwOpk405yaSWpTOrCEXKTSS1Miv2xwi3ymo/+VLA+9rTbDZmIlqrd7OfPbGFjo2+5FVO2qs6olFvEyrdnAtc2vYAy57KlGLlKSyM0duQnNRjB5u2ZQ4v2txIq1KdPu0CVHQMFzMQrFbnNccuk04fZtGUIzld3Sf1MmL2xXhUlThZWbV7Z5d+X2MWtxrFP7Ver7mKj4LYTdHB0I6QXn5nLqbQxM9ZvwdvIsYyozYOiXJYmrWN2JJIC0xuZTTjGOJkoq3urzL605SwUHJ3e8/IyQLmwFzyA1JtqdBNM5xh8Tt3mCnTnO+4m+42Oz3DcQapZaT2FOsL5bDM1F1UXPO5HxmLFYmi4OO8r3V8+1PyOps/CV1VU3BpWeqtwa49pHh+y+Kc5WCU97946ggDUnKCTt5QltGhnuu/cKGyMS7by3e9kVTheEXV8ch8qVJ3J+JA+MOsVpfDTfi7D6pQj8VZeCuT8R4tw+q6t83r1GCpTAeoKSWQBRYJcyinRxEE1vJavmaquIwlWSe628lyX2Ot4mv0re77hKaD/AI0dKv8AGyrkl1ymwmSO4WGlI7gIUjuAmSFwLeWUjHZYXGGWK4HlvywD8oo/VH9szNidF4+h2dk6T8PU7n5IhfhCDbx1xfpdzrb3zJUya7hV86kl+6HU/PaNKmne1ES6i2YgFtBsNzJOnOc3uJvPgUxrU6VOO/JLJauxn4rtdhE2Z3/yKbfFrS+Gzq8uFu8y1Nr4WDtvX7kLh+1eGdXZRU+jp94wKgGwIFhrYm7CRnga0Gk7ZuxOntOhUjKUW8ld5GVie3yAfR0GJ5Z2Cj3gXmmOyp/2kjFPblL+kX42X5K+F7aYipWpU8lJVeoitoxNmYA2ObTfpLJ7Npwpyld5JlNPbNSpVjBRSTaX7oU+L9pcX31VFqlUWo6qqqosFYgeK2a9h1mjDYCg6cZSV21fVmbGbUxMa0oQlZJtaLgYtfE1H/tKlR7fpuzfeZuhRpwzjFLwOVUxFWplObfe2zW4XSJwWICKzM1SgoCgk6FmO3pMuImliabk7WT1OhhoOWCqqKu246EdHgOKYX7plHV7U/2yJdLG0I6yXhn5GSGzcVPSD8cvMmwfD1p1UarXoKEdWYBjUJysDYZARfTrK6mJ6SDUISd0+Fl9y6jg1SqqVSpFWaet3kT1qWBqYhmNas3eVSRkpgAZ3va7G536SEKmKp0klBZLi+SLZ08FVrtuo3vPgub5sgxRwaM6CjWYo7IC1UWOUkXICeW0sp9ZnFSckk1fT/pRiOp0pSgoSbTa1y8ho4ywQU1pUAq3K5qfeEZjc61C3QfCPqt5OcpO/fbyKltBqChGEbLS6v5tkXGeIYj5vhjSYUScQ7O1KkgLU6QpsRYAWNzYeduU5W0MG6qnTp3k7K13xvrfsyZ3dl4+FGMKtVKKbayXCyysuen3MDiPHcXWpU69FjTdqqK1GrdlZiwTLruhvqdDvsRKY4d0MBKMlZxv7y+KXG61d76p5Zcsi9141NpK0t6Ml8LeUctGtLW0az8czoOzWIpvUqGkGUUKWJTK6kHwo4LKT7QJa999dZHAwqww27Wj70pJuXNv7prS1rcgxkoSxe/TmmowaUf8pK3c7873MVVvooueQGp+E9G2lmzykU27Iu4HgmKeouWhVsGW5KFQBf8ASawmWriKUU7yRvw+ErSkrRep6Jjh9I3rOfR+BHfrfGyuVltyuw0pHcVhpSO4WDJC4WEyQuIsZZXclYW0AsOAiA8p+WMflFD6o/tmZ8RovH0OxsvSfh6nd/I4P6pp/WVvf9IZmq8O4Vb5ku/0Iu1HD69V6Jp03YCiguovrdiR5bidfBV6VNTUpWe8zzW08LXrSp7kW1uozk7K41gT3QUD9JlH7/vmiW0aC4/Yx09kYt6xt3tF3hnCadFKwxWIoJ3lPItqgZluwYnLoTsu0x1sU6soOlFuzvodLC4FUIzVaSW8ralGtwXCKhq/PQUDBCVosxzMCQN+gPwl6xlVy3ejz7zM9nUIxc+m93sX/SLCvw+k61A+KqsjK4siIt1IIBzEnlCbxNSLjupJ5akYdSoyUt6Ums8lbzGPXwlWvmKV/pKhZ71EFs7XNrJfnLIxr06dk45Lk+BCU8LWrbzUryfNcWT4zG06FarSpYej4HdM9RWqscjEXAY5QdOkVKnUrQjOdR58FkFetTw1SUKdKOWV5XZEON4nYVnX6sLS/DAlqwdFaxv3tvzMr2niXkpW7kl5It42ozYGmzszFq9Q3Zix0RRuff8AGV0YxjipKKst1F2InOeAhKcm25PV34GQgJ0UEnoBc/ZN7klqzlRg3lHM0OFcNrtVp2pVCM63ORsoGYXubWEzYjEU1CXvLR8TZhcLWdWD3Ha64MuY/gVXvXLPQTNUqFQ9ZFJBckGxMoo42mqcUk3ZLRGrE7NrSrSk3FXb1a5lapwgIAauIoKGvlylqma29sikfbLVi97KEG/t5md7P3EpVKkUvF+SLnfYHuadKo1d+7aoQURUzZ8tx4iTbw+Uo3cT0jnFJXtq76GlVMF0Mac5t7rbyVte8ai8OKVKow1V+5yMoqVLXZmyfm7aMfdeRn1rejGUkr8l2dpZTeC6Oc4Qk91K6bte70yIv+Jil/m2HoUbixYLne3TMbXHukupb3zZuRX7UUPk04x+/wCCs3abHHasRf8ARSkv2hbyfUqCWa+7K1tPEt5S+y/A7jGKrVOId29Ryor01ClmKDKyjRdhqLymlThGhvJZ2ZrrV6jxe45O11l9DucUPG3+Y/fMlP4Edap8bISJZcrGlY7gNyR3CwhWFwEyx3AnAlYC2gMW0QHk3y0f3ih9Uf2zKa/wrx9DrbL/AL+HqavYCs39GUgGIGaroCbf2jHaSjFWRzsfJ9NL94Gv2p4nVWoKS1HRFpU9FYqDdATe2+/2Tfg8PTlFzlFN3evecfaWLrRqRp05NLdWmWZUxFN8QgNRmGVEWkrHQBVFywN9Wa5946RU92lJ2Szb4fuh1J7PniMOt6TUkllfLx7zHbAVrhRTYFtiwIWwIzG+xAuNt5slXgldO5xMPs+tUq9HJNc7m1U4a3zb5vRu7tVpuSSi5sqVA2psBqV09Zi6X+VVJ6JNHZxWzdzDuFDPNMzafBa/ed22RbAF2DK4W50XwG2a1za+lweYl3W4tXhmYcPsapUf8jsvqaOH4NRpulSviqaKGBy2c1GCm9rAaeuu8rniZyTjCDb+w3syOHqKVSokr37WMxVHDV8S7Uazvmd6tY5Mgpio5IVb+02+9tBI06tWnBQcUrLn+C1bOpYycqkJvXPIs1KWFo0lqmhVqE1GphalUKPCqtm8C/rDnyjjUr1J7ikllfJX8zNWwuGw8d6cG3e1m7cL8OA2n2jcqaVHD0FRPFlyGqUzc8zm2tukfVY715zd34eRFYms6V6NFbi7N6xZ4V2jxTV6NPOqo1WmrKiIoYFwCDYdCdoq2CpRpylm3Z6srw+0q8qsIZJNpWSXMocR4ziKhZHquVzNdb2G9rEDcTRQw1KKTUVeyM2KxuInOUHN2u8tPIz0I2HuA5+k03sc6zbOjbgWJq0KBp0/ZWoGDEKQTVY7N5WnOWKpU6s95627eB2HgK9XD0lGOl73y49oyn2SxRF27tP87j+G8nLaNFaXfgVx2LiZa2Xe/wAXLOH4KtOhWSticMpq5Ahz3tkcMdNDytpM88Xv1IyhFu1+HNGyls/oaNSFWcVvWtnyd+wqU+zauWy4zCnKMzWe4VepOwGo185a8fa14SKI7I3r2qxdiv8ANMDTIL4suVIJWlSJBtyDkgH1jdavNWULd7FHDYWk051btcl6k+ExGCrY1agTE56lYMAzUlRWL35XJAPKVTjXhRcfdsl23NFOphauJUlvbzfZa52NceI+p++ZofCjqz+JkZWTuRsNKx3FYbaO4CWgAWjAltIAAEBigRAeS/LX/eKH1R/bMqrfCu9+h1dmf38PU0Owf/LaXrV/EeWQ0RzNofOl+8Dc7S8TZKrIEo27tFZjTU1GBprfxnXnbSbMJh1KG+5PV5Xy15HNxmLca6pKEdIq9s80uIlMyDR6hMgLVfnCg5zTCPkBvkU/RXynYE3Pwj91LLXj9zLBT6zJvSyt9r/vYWcat6T8vA33GKDtJF2JW9Rmux+RS7Ma0TbWz2+CJf7bydd++ZNkprCxv2+bLXGME9SnlpozsGBAUEm3P3RUaihK8nZC2tSdTD2Su7qwvDUAoUwBYZQbeZF2PqTckyD1Ztw3yYZcF5EXF0VqJz1cgQO9MZSwd8vs2GxNhrtpJUpOMrxV75dxg2vRhOknKVrP69n4H4XDJTTKvqxO7HmT5yLk27s6NKjClBQgskOpV6FFkKYcNVzZldqrKiMDcHIOmmnPyjn0tSL97LuOPPA0KWJgoQzldp3yVuzyF4dTpU3zPTSpdiamZb3LG7EC+nOw2G0jJz3bRk0b57Pw8l8Cv3GevG8cfoadTIeYpolNaY2JOQAkDkL66eZl06FFLeau3zuzg4V4utWdJPdjHWySt2aC4/EV9GNas3K7VGJB+OgMnRjTatur6C2pQr4eSnGcnF9ujDidU1FwqA5iKLGoxN+7vUe1/wBY2Fh0F9hIU5KnOeXFeQRwVTGU6b3rWTu3nxMyohBIM2J7yuji1qTpTcJaov8ADCpw+LtqclNf/npXA665bzNWf8kF2vyZuw9KUcNVm4uzSs/EzXpkGxBBOwta8vumYLNao2ey/D6pxVJhTfKtRSxymygG+p2Ez4qpFUpK60N2Ao1HiIPddk+R1GM7SYRGrAuS1F8tRArF7kj2V/O0YHTlrOZ0kVlc7tSrCMmpO3Ez/wCm3eocpVBSchh7S10ZLowJGm6nTYhlO0y18Xu5RWfPgVOto1axvUKmZA3UXmylPfgpPiWp3Vx5lgxpEYhLQCxLaRuMW0LgLaK4WPI/lt/t6H1R/bMrrfCu9+h1dm/38PUu9hj/AFbS/wBX8V5dT0j4HL2j86f7wNrtTisGTUBSq1XuwFYMvdh+7GXS97DS/vmnDRxG6rNbt3365mLEywvTZpueXdeytxGVajKhKKWYDwqCBmPLU6CNo9BFlDCdqaNymJV6Dra+ZWcN6ZVuPha3OYJPEQ1ipf8A5y+zf3v4GpdHLmi3S7U4AuE+cKGO2ZKiL73dQB6m0rWJqJ+/TaXg/sm2O1PRSN0023sbb35W65trecfXsOlffX19NSXQyGshFjqOakXHvBH7pZTxFKqvdkmQnQbWaKophVCqLACyi5Nhy1OsvuQjDdSikVcdgxVpkMxVdiwKrY22zNoDrtIPFwpPNq7IV8HHERUZ6Jp/QmYEScZpq6L3BrUoYikWqI9xZb6ddCP3/ZLVO0XEw1MM5YiFa/wpq3eStVkTUVWWmKwdBU1pnvC+S2csvsZTe2nPpHvyatK2Rgw2H6OvVnZ+9bW3bp/0mFdAb1FLIPaUGxYdAeUSu3aLsy3GbqoT31dWzRQwFZShZRlU1KpVSblQajWBPM2sL+Ucr3z1FhIxVCG6rKxpLxDusJUcJTLGvRpK7KpZBVzBsrEXBsunS8pldzSu7crirUacppuKu+OVzLwnEHoVFqUjlKeyOVuakcwZOUVJWZduLd3UXuJds8UwK98KfhBbIArENf2W1K7G7XFuWuzeGpQtlfvONg5V685uo0oxbWXG3kjN4X2txgrCpUqO9OmUCIzNaooFyd/FvYE39n1mGvWjBuCis+JTi8SoV4yg20tVfIpcRxveYitVF8ruTTLHM5WwHjPxsBsLTHVlvSuc3EyjUneN/EhONYCwJlRQoM9U7Pa4SgetKmfioM6lH5ce49BRVqcV2F4iWkxpEYBaAWJZEYQAURDPIvluP5RQ+qP7ZldX4V3v0Ons3+/h6lvsQf6to/6v4rzRR0j4HK2j82ZX4vQ7vE1metRHesho0S571hks7BMug8O9+U20au693mYsRh3Ucai4Wv8Aax0okGd9ENPiNM1BSDHP9Jdbbd33ZJvfYisljps3TWq7vYlCopSceQY/h9HEDLWQPbYnRl9GGohKKepYV8P2cwq0zSyMUJvlZ3IGt9Bew1kFCKlvWV+fH6kr5WMrjPCxg6JrYbEYijZkGVHOTxuq6qLX1a+t5CtQp1X76XfbP66kKtWVODlHga3BsRi3oK1eol2ClGRMlTKdbsb2DEfogEdZm6lGWU5Nx5Xy8eLXY2y+Febjnk2VOPYfCrTd66scxZmYXaoWAJuCTfbS23KbYU0laK0X2M1fEQpW3+LsUcNRxuGdVpV0qYcW8FZWLIvRCuu3mB5TJLDZ3g3F9n4eX2ua4zkstV2mnUxo9oiwLZRvlzWJygnnYE23sJpWStcg5R3t3iV3xojuS3SBsZALCjH252hcTS4jfnYNwCNNwLaE66+uphchZLJDK2KuhpnVSyvY7Z0vlb1FzDjci4ptMxsfxmmj934i9r2VS1r7XttIyqRi7MhOpGCvJ2I8WalRcwsHNOmrKbgEqxJ13W4JGkyVMdKXutdh5qliVSco8JNtvV5/YsB7D/8AT9p3mAwNXYxmgNIYTAlax7NwFbYTDjpQpfhrOpT+FHah8C7i8ZYSGwAIwKgxTeXwlvRor3mSLjOqyDp9o98lXFjoZHo2PfPJPlrqA4ihb/pH9symsmorx9DrbNeU/D1LfYo/1bS/1fxXmihpE5O0vmz/AHgZHa0I3FEIq08yoFZPGXzBajW0XKNGB1Il8PjRB36K1uK80dqTrLDqXObwCp/SlazXbIzMLWy5kwwA8/ZveV2V3zKoSl0zvpZHRV64RGc3IVWYgbkKCTb4QlkrmtMbwvitLEUhVotmU6dCpFrqwOxFx8ehlad1dEk7i8RoU61NqVUZka1xcjYgggjUEEA38oNXyG0mrMbRdURaYJIVQoJ3IUWF/PSA0uBzPbPjJoqjAIQe+QhlzjxUWAsOtyNeUrm+H7+3M+LhvRXf4ftiZcT9Govsq/cI1obloZXEcebomc2FVDlubZirgm218o33tHeO723Xec+tfrlO2lnf0NKhhg+Gzh7VS/hufAUJHtKNQwF9Da9gDa9xhniJRm1wMOI20qFaUJLT6lepRcZtVADNYkm5QWsxCg6nXT06ySxS4odPb9KVlKLvlpzfDgVcJ3hy1WYpoSqAeJL2tmY87ZgQAPatylFbEb+SWRk2jtPpd6jGKtz/ABYsVsQdSLblrbAseZtKYVZRd7nNwtadKop7z7e7lmUhWe4LsCAutgRnY7m3ICwtqdzeXvGT4HVntSpK25l+/vIzH4entKzK97moD42J3v5HptKZVXJ3ZU8XOUm52afB6GglS0qMMo3B6kYKJH3hgT3SSmdIEJI9z4clqFIdKdMf+wTpw+FHZiskTESxMdhpEYhLRgZ8vKRRABwiGeU/LIfyij9Uf2zMuI0Xj6HW2ZpPw9S92MP9W0v9X8R5ow6yicraXzZ/vAxeN4WmeKPUNenmLAilZy/9kBa9rA21l8YrpL38CHSS3ElF2us//pHbM8mdU5jhi5eK4g5rlqea1vZF6SqL89jK1G0nnrmVU5b1R5aZd5tcYq/k9UXP9m+1r+ydr84S0Zod7ZGH2FxifM8qZgFqOPFa5uFbl/mA90oha2RKi3ue9r2GxieJKouxAGguTYXJsNfUyTdi0za2PJMCaMjjypWp5XNrewd8rNoNOe4ldS1ncrrxUo3btbP/ANErV2Zlp+Jc7FCcpuLKS1rkWsOfLz2lFWslG8WUYnHwhRlOm07dvPuNNaFMC2VTchmuB4mAsGI2vYTA5Nu9zxdTEVakt+UnfTw5BSRUzZfzmLtrqWO9/gB7pEVScqjTlwVhrvEJIru8RakVq1W0RdCNypVrQNEYEJrwLFATv4D3BO+gG4OFSMi4llWspgUtZnv2HFkUdFUfACdSOh11oPkhjTGIS0AMwTUUCiIBwMQHlPyxn8po/VfxtM2I0R19maT8PUu9jT/VtL/V/FeacPpHwORtP5k/3gZHHeEP/SLYnvKOXvKZyZz3vsqtstvXntLIxe/e69ScKi3VCz9NTqXryw6JlNRpJXbEgtnZMh1GXLcHQW306yNs7ijBJtriQ4zGhgVOxBBG1wdxpIsvSMzCslFClIZVJzWuTYkAbnXkJUkloSiktCLGOtVDTe5VrHQ2OhBBB90i7NDaUlYiWsqogzaZbISdXCCxIP53qJCMo6XCM4u6T01G8BqnEVGqkKaS2CAt4ldWDByo9Of26zBXrOeS0OJtjFNR6OLav2ZNd50LG5ubabeX8pnPNK+hG7wJpETNETSImeBNIq1KkRfGJVrVIi6MSnVqQNEYlc1IFqiWaeBrsgqJTZlb2Stm55dbba9ZLdZGVSnGW7KSTNvAdnrFWxDAi3ipoed9i/S29uu/OSUUjn1towSapK75vQuY7hNB8mS9PKAGIAJqAC2t9A360N1GeGOmr70b8hH4TRyhVLggG5zAlibatccrbCw1jaRHrtRyu0j0Xg3aylUyUquZahsubKO7dtNrE5bnTW01wqxaszr0MbCoknkzpDLzYJGAl4CMyaikWIBREB5X8r1F2xNEqjsO6IuFJF8500mfEJu1kdTZ04xUt5209S92PQjAUlYEEGpcEWI+kbcGaqEXaJytoSTqzaf7Y5TjeHc8Vq1Mj5RVJL5TlFlsPFa28IxfSXt+2NEZrcSvndeZuDEu5yqCxsTYamyi7G3QCTlNR1ZtlKMbX4mfUxt9LjW9vO1r/eINkoyi20noVqmI1A5kqoHUsQo38yJTOairslKahFyeiNLB8GcuwrggBUZbEMjte7I2tyNgbW567GYquIbVo/8AhxMTtqnGCdLNu65W7fwbnFTSrDK1KnYKqAW1CIbqtxrlHTY87zFFbujOL7RxF7xlb/plY2hTqFS6q2U3W40GhG3Ma7RXtoFGtUpp7ravqRYHCrSpimhJAvYm19TzsBAlXrSrTc5ExaIqSIXeBYkRF4iaRWq1Yi6MCtUqRF0YlWu8C+KKVR/OM0Rib/AeD2JqV0G6GiLg6WJJNiQQcwFj0liVjnYzG2ShSfO/4OhNYxnI3bu7ImcxEkhuaA7CFoXCxNwkk4mgOtan+2I4/EjTh4/yR70eukzonohsYguYwMyaSgLwASAiOpTvJJ2AwsbwuooqMCuXxOdwQNyLWlkGnJXMteL3W+w4njtDF99UqvXvRuStK59n80EWtobH3RxhJO98s8vA0Qq03KMd3O6z8SfgGKCU6pX2qhyOf1Ao8Pp4iff6TkY7OauZdpYirGvuxdlYp8Xw3esuW6tldQ6hclJbDddNyFtbzlVPESjHd/cyODxkqO/OWemXF/8AhLUwNPKFUZbGmbjU/REZQL7bfaZV0krWuZo4yqm3J3yas+00GxJkLmHoyJqkVyaiRMYE0hhMCRE7xMnGJC1SRLFEiqPAnGJTr1IjTCJRqVukDRGA1EdzlRSxsTYakgb2Ekk2T92KvJ2Oj4Dwnu1z10Qve6AqrGmNLeK518v9maVjl4zG7z3aLduL5/vM1GMZzkNgMS0QDYEhjRDRZ4AL42gP/NT7DeSh8SNuFX8iPXp0TuCRiCAClAdwPhFdhZDGwyHlb0klOSE4JkTYIciffrJdKxdGRvgz1Hv0klVRHoyGtg2IKkAgggi+4O8kqkSEqbascb2v7OqmFq1ESpmAB3d9My5rDW+l5oVdOLRVCio1YytxOF4fVsh0ZbtezAgjRRqDttONjHeafZ6spxy3qzfYXVrzJcwumOFWFyO6O72Fxbo7PAjujTUELkt0iqVYicYELVIFiiQtUF4ixRI3qA7EQJqLRTq0mJHIEgZiCFFyBckDbUR7rZqgrK5v4Ps/SWkBXW9S7ZiHNrFvCBbTYb76mTSsc2vtGfSfw6ZeROMJSVzVCjMdj+iAFFlHIWUfb1gzO69SUOjby/8AdfqStVhcq3QV4XBoQvC47De8hce6NzxXHujGqQJKJd7LPfH0B+ufsRjJ0vjRtwsffR60GnSsdcdeAwvACQSAxYDCIAKwuKxGcJT/AER7tJLpJcxbkSNsGvIkfCSVRicEcTxz5PKlfEPXXFBQ5BymkWK2ULvnF9pnrU+kle9iuVFPUbh/k0t7eKY/5aQX72Mr6vHmVPCplpfk4oc8RX93dj71MfVo839vwCwkSal8neFG9TEH1ZP3II1h4dodUgWV7C4Pn3h9XP7o+gp8vuPqtPkSL2IwH/SY+tSr/wDaPoaa4eZJYeHInXsjgB/gJ78x+8yXRw5Il0MeRMvZnAj/AMNQ/wDTQ/eI1CC/qvoPokWKfB8Mu1GkPRF/lJZch7iJjhEtZQF6WA090akDguBzfaXs/i65QU3QotyVYhRexGoFMkgg7XtoJGv7ytHIzVqFSasmjK/4Jxh3egP+5z/DMvQS5mSOzJcxR2CxB3rUh6Bj/KHV3zLFs7tHj5P6vPEoPSkT/GJJYdc/sP2euZYpdgQParsfRAP3mS6vHmyXUI8yYdgqHOrW+KD+CPq9PtH1GA5ewmGH51U+rD9wEkqFLkT6pDkT0+xWDG6MfV3+69pJUqS/r5j6rDkTL2SwY/wV99z95kujp/5RLq8ORPQ7O4VGDJRpqw2YIoI9DvJx3Y5qK+hNUktDRWiBG5Nllh1oiQQAlEgSHRDCAEBx1IaGol+lxMjx2GTs6kb96NKwWIauoO3cLUxVNbZnUXFxcjUdZOpi6FO2/NK+ebI08NWqX3IN2y0AYqnlzZ1sNCbiwPrDrdDc6TfW7zvkLqtbf3Nx35WCpi6amzOoPmQIVMXQpu05pPtYQwtaorwg2uxCnFJlzZ1yk2BuLX6X90Hi6Cgpuas8r3yuCw1Zz3FB31tbMKeLptfK6mwubEGw6wp4uhUvuTTtyYTwtanbfg1fsH06isMykEciNRLadSFSO9B3XNFc6coS3Zqz7R0mQFtALBlgFhLQCwWgFgtAQWgAkAC8YBeACQAIAEAEMYhDGAkBBAYkACMB95GwwvCwEbZ+RHvEatxE7mO+ArHMLe0xPtADe+otPLz2ZiX0iUdZNr3klrldWz+qPSQ2jh10b3tEk/dbenB3y+jJa2EqkodPCgXwkL18poxGArudKUVfdik7NRzz0yeXgUUMdQUKkW7Xk2rpyyy1zXmNGBq90yaeJgbXF/eZX7NxHValOyvKSaz+t3ZE/aFDrUKl3ZRaeXkh+IwtUvmA/NA0YD7wZbisFWliOkgrrdS+JJ3+j8ivDY2jHD9HJ2e83nFtfZrzGHA1e6CWXR82+oFjzlT2biOqRpWV1O+vCz487lq2jQ626l3Zxtpxvy5WJMNhKodmIGqFdWBOu2tpZh8BiFVlOSsnFrNqTv32RVXxtB0owTu1JPJOKt3Nsu8NplKSq24vfnuxP750NnYedDDxp1NVfzZhx9eFbESnDR28kWc03WMdxc0LAGaFguJcwAWABrAAgIIDCIBLRiC0AsJAAjAQwEJaMAtALCQAIwCAD7SBKwtoBYMsLjsFoCsFoXGLaAWDLALBlgKwmWAWDLC4WC0AsEACABeABeABeABAAgAQAIAF4AJeFhBeMAvABLwAS8YD3QBMwN2v7Mz16tSEZOEbtK6XN8iyEItq7tmZz4mqKyIKRKMpLvfRCNhb/e8jha1WpCLqQ3W1drtvp6llalThC8JXe9a3ZZve+uRdmszEkgTFgARAEYCxAEAFMAEMAAwAQwASACmMQkACACQAIxCRDFEACAAYAJGISABGAQAIAJAAMTDiEED0CAz/2Q=="></S.PostAlbum>
              <S.Darkness></S.Darkness>
              <S.PlayButton>
                <S.Triangle></S.Triangle>
              </S.PlayButton>
            </S.PostAlbumContainer>
          </S.PostContentContainer>
          <S.NewCommentContainer>
            <S.NewCommentMetaContainer>
              <S.NewCommentLabel>댓글 달기</S.NewCommentLabel>
              <S.SubmitButton>▶</S.SubmitButton>
            </S.NewCommentMetaContainer>
            <S.NewComment />
          </S.NewCommentContainer>
        </S.PostContainer>
      </S.Post>
    </Layout>
  );
};

export default Post;
